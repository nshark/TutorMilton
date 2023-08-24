import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection, db } from "../config/firebase-config.ts";
type Person = {
  name: string;
  comment: string;
  subjectsToTutor: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.comment, {
    id: "comment",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Comment</span>,
  }),
  columnHelper.accessor((row) => row.subjectsToTutor, {
    id: "subjectsToTutor",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Subjects</span>,
  }),
];

export default function TutorTable() {
  const [data, setData] = useState<Person[]>(() => [
    {
      name: "test",
      comment: "if this shows up, email Noah",
      subjectsToTutor: "N/A",
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  useEffect(() => {
    async function commentGetter() {
      const q = query(collection(db, "/tutors"));
      const querySnapshot = await getDocs(q);
      const tutors: Person[] = [];
      querySnapshot.forEach((doc) => {
        tutors.push({
          name: doc.data().displayName,
          comment: doc.data().comment,
          subjectsToTutor: doc.data().subjectsToTutor,
        });
      });
      setData(tutors);
    }

    commentGetter();
  }, []);
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
