import { db, collection } from "../config/firebase-config.ts";
import { doc, getDocs, query, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./profcomps.css";

interface User {
  closed: boolean;
  date: string;
  displayName: string;
  email: string;
  review: string;
  reviewed: boolean;
  subject: string;
  tutor: string;
}

// we pull out the query function out of the component scope and parameterize it
// so it can be reusable
async function getUserDocs(id: string) {
  const q = query(collection(db, "matches"));
  const querySnapshot = await getDocs(q);
  let userInterface: User | undefined;
  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      console.log(doc.data());
      userInterface = doc.data() as User;
    }
  });
  return userInterface;
}
export default function TuteeReview() {
  const [review, setReview] = useState("");
  const [queryParameters] = useSearchParams();
  const [user, setUser] = useState<User>({
    closed: false,
    date: "na",
    displayName: "na",
    email: "na",
    review: "na",
    reviewed: true,
    subject: "na",
    tutor: "na",
  });
  useEffect(() => {
    getUserDocs(queryParameters.get("request")).then((user) => {
      setUser(user);
    });
  }, []);
  function saveReview() {
    setDoc(doc(db, "requests", queryParameters.get("request")), {
      closed: true,
      date: user.date,
      displayName: user.displayName,
      email: user.email,
      review: review,
      reviewed: true,
      subject: user.subject,
      tutor: user.tutor,
    });
  }
  return (
    <div className="App-bg">
      <p className="prof-comp">
        review tutor {user.tutor} ?
        <div>
          <input
            placeholder="Enter Review"
            className="txt-Box2"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button className="conf-button" onClick={saveReview}>
            {" "}
            Confirm
          </button>
        </div>
      </p>
    </div>
  );
}
