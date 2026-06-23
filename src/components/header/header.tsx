import { CreateStudent } from "../dialog/createStudent"

export const Header = () => {
    return (
        <div className="flex justify-between w-full">
            <div>STUDENTS</div>
            <div>
                <CreateStudent />
            </div>
        </div>
    )
}