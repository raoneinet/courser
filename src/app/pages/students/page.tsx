import { use } from "react"
import { Header } from "@/components/header/header"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pen, Trash } from "lucide-react"

const StudentPage = () => {

    const students = use(fetch("http://localhost:3001/students").then(item => item.json()))


    return (
        <div className="w-full p-10 ">
            <Header />
            <div className=" py-10">
                <Table className="border">
                    <TableCaption>List of students.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-25">Name</TableHead>
                            <TableHead className="w-25">Gender</TableHead>
                            <TableHead className="w-25">Age</TableHead>
                            <TableHead className="w-25">Class</TableHead>
                            <TableHead className="w-25">Avg. Grade</TableHead>
                            <TableHead className="w-25">email</TableHead>
                            <TableHead className="w-25">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.data.map((item: any, index: number) => (
                            <TableRow key={index} >
                                <TableCell className="font-medium">
                                    <div>Img</div>
                                    <div>{item.name}</div>
                                </TableCell>
                                <TableCell className="font-medium">{item.gender}</TableCell>
                                <TableCell className="font-medium">{item.age}</TableCell>
                                <TableCell className="font-medium">{item.class}</TableCell>
                                <TableCell className="font-medium">{item.avgGrade}</TableCell>
                                <TableCell className="font-medium">{item.email}</TableCell>
                                <TableCell className="font-medium flex gap-4 ">
                                    <Pen size="16" />
                                    <Trash size="16" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default StudentPage