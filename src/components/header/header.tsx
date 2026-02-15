import ModeToggle from "../ui/ModeToggle";

export default function Header() {
    return (
        <div className=" w-full flex justify-between items-center p-4">
            <h1>Character Generator</h1>
            <ModeToggle/>
        </div>
    )
}