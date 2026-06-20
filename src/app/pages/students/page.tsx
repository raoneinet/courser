import { Header } from "@/components/header/header"

const StudentPage = () => {
    return (
        <div className="w-full p-10 ">
            <Header />
            <div className=" py-10">
                <table className="w-full p-10 text-center">
                    <thead className="min-w-full">
                        <th className="w-full flex justify-between">
                            <td>Students</td>
                            <td>Gender</td>
                            <td>Age</td>
                            <td>Class</td>
                            <td>Avg. Grade</td>
                            <td>email</td>
                            <td>Actions</td>
                        </th>
                    </thead>
                    <tbody className="w-full text-center">
                        <tr className="w-full flex justify-between items-center py-3 px-2 border-b border-gray-300 hover:bg-gray-300">
                            <td>
                                <div>Img</div>
                                <div>Robert Fox</div>
                            </td>
                            <td>Male</td>
                            <td>18</td>
                            <td>English</td>
                            <td>9.2</td>
                            <td>robertfox@gmail.com</td>
                            <td>
                                <div>Editar</div>
                                <div>Excluir</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentPage