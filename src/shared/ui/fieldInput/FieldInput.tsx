import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type FieldProps = { label: string, id: string, placeholder: string, description: string,  }

export default function FieldInput( {label, id, placeholder, description, }:FieldProps ) {
    return (
        <Field className="mb-2"> 
            <FieldLabel>
                {label}
            </FieldLabel>
            <Input id={id} type='text' placeholder={placeholder}/>
            <FieldDescription>
                {description}
            </FieldDescription>
        </Field>
    )
}