import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, db, auth } from "../config/firebase-config.ts";
import emailjs from "emailjs-com";
import { getDocs, query, addDoc, setDoc, doc } from "firebase/firestore";

interface User {
  displayName: string;
  email: string;
  subject: string;
  closed: boolean;
  date: string;
}

// we pull out the query function out of the component scope and parameterize it
// so it can be reusable
async function getUserDocs(id: string) {
  const q = query(collection(db, "requests"));
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

export default function RegisterPage() {
  // eslint-disable-next-line prefer-const
  const [queryParameters] = useSearchParams();
  const [user, setUser] = useState<User>({
    displayName: "",
    email: "",
    subject: "",
    closed: false,
    date: "",
  });
  const id = queryParameters.get("id");
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

  function sendTuteeEmail() {
    const templateParams = {
      from_name: auth.currentUser.displayName,
      from_email: auth.currentUser.email,
      class_name: user.subject,
      to_name: user.displayName,
      to_email: user.email,
    };

    emailjs
      .send(
        "service_jsnvh9j",
        "template_6p9i4f4",
        templateParams,
        "user_QdL21uWEOg0m5JaXOC1LF",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  function pushTutor() {
    try {
      addDoc(collection(db, "matches"), {
        id: id,
        tutor: auth.currentUser.displayName,
        tutor_email: auth.currentUser.email,
        tutee: user.displayName,
        tutee_email: user.email,
        subject: user.subject,
      });
      setDoc(doc(db, "requests", id), {
        displayName: user.displayName,
        email: user.email,
        subject: user.subject,
        closed: true,
        date: Date(),
        tutor: auth.currentUser.displayName,
      });
    } catch (e) {
      console.log(e);
    }

    try {
      addDoc(collection(db, "tutees"), {
        name: user.displayName,
        email: user.email,
        subject: user.subject,
      });
    } catch (e) {
      console.log(e);
    }

    sendTuteeEmail();
  }

  return (
    <div>
      {" "}
      {!user.closed ? (
        <div className="App-bg">
          <p className="prof-comp">
            Confirm Pairing with {user.displayName} for class: <br />{" "}
            {user.subject} ?
            <div>
              <button className="conf-button" onClick={pushTutor}>
                {" "}
                Confirm
              </button>
            </div>
          </p>
        </div>
      ) : (
        <p className="prof-comp">
          The Pairing with {user.displayName} for class: <br /> {user.subject}{" "}
          has been taken.
        </p>
      )}{" "}
    </div>
  );
}
