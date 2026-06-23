import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { AddNewStudent } from "../forms/addNewStudent"

export const CreateStudent = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button type="button" className="cursor-pointer">
                    <Plus size="35" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a new student to the database.</DialogTitle>
                    <DialogDescription>
                        <AddNewStudent />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}