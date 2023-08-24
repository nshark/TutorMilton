import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {getDocs, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {collection, db} from "../config/firebase-config.ts";
type Person = {
    name: string,
    email: string,
    subject: string,
    closed: boolean,
    date: string
}


const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor(row => row.closed, {
        id: 'closed',
        cell: info => <i>{(info.getValue() ? ("true") : ("false"))}</i>,
        header: () => <span>Successfully Paired</span>,
    }),
    columnHelper.accessor(row => row.subject, {
        id: 'subject',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Subjects</span>,
    }),
    columnHelper.accessor(row => row.date, {
        id: 'date',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Date of request/closure of request</span>,
    })
]

export default function TuteeTable(){
    const [data, setData] = useState<Person[]>(() => [{
        name: "test",
        closed: true,
        subject: "N/A",
        date: Date(),
        email: "test@gmail.com"
    }])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    useEffect(() => {
        async function requestGetter() {
            const q = query(collection(db, "/requests"));
            const querySnapshot = await getDocs(q);
            const tutees: Person[] = [];
            querySnapshot.forEach((doc) => {
                tutees.push({
                    name: doc.data().displayName,
                    closed: doc.data().closed,
                    subject: doc.data().subject,
                    email: doc.data().email,
                    date: doc.data().date
                })
            });
            setData(tutees);
        }

        requestGetter();
    }, [])
    return(<table>
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
    </table>);
}