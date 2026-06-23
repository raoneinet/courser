import { Plus } from "lucide-react"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <div className="flex justify-between w-full">
            <div>STUDENTS</div>
            <div>
                <Button className="cursor-pointer" type="button">
                    <Plus size="35" />
                </Button>
            </div>
        </div>
    )
}