import { useSearchParams } from "react-router-dom";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase-config.ts";
import { useEffect, useState } from "react";

// we combine the `email` and `name` states into a single state
// "User" that contains the necessary fields we look for
interface User {
  name: string;
  email: string;
}

// we pull out the query function out of the component scope and parameterize it
// so it can be reusable
async function getUserDocs(id: string) {
  const q = query(collection(db, "/users"));
  const querySnapshot = await getDocs(q);
  let userInterface: User | undefined;
  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      userInterface = doc.data() as User;
    }
  });
  return userInterface;
}

export default function PairingPage() {
  const [queryParameters] = useSearchParams();
  const [user, setUser] = useState<User>();
  const [comment, setComment] = useState("");
  const id = queryParameters.get("id");

  // for the effect, if there is ever a case (rare, but can happen)
  // where the ID changes in the middle of a query, we want to abort the old query
  // such that by the time the promise resolves, there is an `aborted` value that is set to
  // `true` for the old closure that prevents race conditions
  useEffect(() => {
    let aborted = false;
    getUserDocs(id).then((user) => {
      if (!aborted) {
        setUser(user);
      }
    });
    return () => {
      aborted = true;
    };
  }, [id]);

  // there may be a chance that a user is not found, we just make sure that
  // it always exists before rendering
  return user ? (
    <div className="App-bg">
      <p className="prof-comp">
        Confirm Pairing with {user.name}?
        <div>
          <button className="can-button">Cancel</button>
          <button
            className="conf-button"
            // the onClick handler for the button is inside the `user` ternary check
            // so that it's guaranteed to exist by this point, also no need to await here
            // because it's the only function call in the body
            onClick={() => {
              addDoc(collection(db, "/tutors"), {
                available: true,
                comment: comment,
                displayName: user.name,
                email: user.email,
                subjectsToTutor: decodeURIComponent(
                  queryParameters.get("course"),
                ),
                uid: queryParameters.get("id"),
              });
            }}
          >
            Confirm
          </button>
          <textarea
            className="comment-area"
            value={comment}
            placeholder="Write any comments you have on the tutor's ability to tutor here"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </div>
      </p>
    </div>
  ) : null;
}
