import {auth, collection, db} from "../config/firebase-config.ts";
import {MouseEvent, useEffect, useState} from "react";
import Header from "./Header.tsx";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {getDocs, query} from "firebase/firestore";

type Person = {
    name: string,
    comment: string,
    subjectsToTutor: string
}


const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor(row => row.comment, {
        id: 'comment',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Comment</span>,
    }),
    columnHelper.accessor(row => row.subjectsToTutor, {
        id: 'subjectsToTutor',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Subjects</span>,
    })
]

function Admin_Dashboard() {
    const [data, setData] = useState<Person[]>(() => [{
        name: "test",
        comment: "if this shows up, email Noah",
        subjectsToTutor: "N/A"
    }])
    const [info] = useState([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    useEffect(() => {
        async function commentGetter() {
            const q = query(collection(db, "/tutors"));
            const querySnapshot = await getDocs(q);
            const tutors: Person[] = [];
            querySnapshot.forEach((doc) => {
                tutors.push({
                    name: doc.data().displayName,
                    comment: doc.data().comment,
                    subjectsToTutor: doc.data().subjectsToTutor
                })
            });
            setData(tutors);
        }

        commentGetter();
    }, [])

    async function signOut(e: MouseEvent) {

        e.preventDefault()

        if (window.confirm("Are you sure you want to sign out?")) {
            await auth.signOut().then(function () {
                console.log("Successfully signed out.")

            }).catch(function (error) {
                console.log(error)
                console.log("An error occurred")
            });
        } else {
            return
        }


    }

    return (<span><Header/>
                <h1>Welcome Admin {auth.currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={auth.currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                <button className="conf-button" onClick={signOut}>Sign Out!</button>
                </div>
                <div className="dashboard">

       <div className="dashboard__container">
<table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                      <th key={header.id}>
                          {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                              )}
                      </th>
                  ))}
              </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                  ))}
              </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                      <th key={header.id}>
                          {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.footer,
                                  header.getContext()
                              )}
                      </th>
                  ))}
              </tr>
          ))}
        </tfoot>
      </table> <div><button className={"conf-button"} onClick={() => {/*Should bring up a file upload dialogue for a csv, and then parse the csv
      and save it to the database in a course list form.*/

       }}>Update Course List</button></div>    <div className="App">

         {
             info.map((data) => {
                 return (
                     Frame(data.email, data.displayName, data.gradYear)
                 );
             })
         }

     </div>
    </div>
  </div>
    </span>
    );

}

function Frame(course: string, name: string, age: string) {
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">

                <p>NAME : {name}</p>


                <p>Age : {age}</p>


                <p>Course : {course}</p>

            </div>
        </center>
    )
}

export default Admin_Dashboard