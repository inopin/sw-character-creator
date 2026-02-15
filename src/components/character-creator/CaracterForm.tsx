"use client"

import { useState } from "react";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import FieldInput from "@/shared/ui/fieldInput/FieldInput";



export default function CaracterForm() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0]

        if( file) {
            if(previewImage && previewImage.startsWith('blob:')) {
                URL.revokeObjectURL(previewImage);
            }

            const imageUrl = URL.createObjectURL(file)
            setPreviewImage(imageUrl)
        }
    }

    return (
        <div className="w-full">
            <h1>Лист Персонажа</h1>
            <form>
                <section>
                    <h3>Данные персонажа</h3>
                    <div className="flex w-full">
                        <div className="mr-8">
                        <FieldInput label='Имя' id="characterName"placeholder="введите имя" description="Выберите уникальное имя, под которым прославитесь" />
                        <FieldInput label="Концепция" id="characterType" placeholder="введите концепцию" description="пару слов о персонаже"/>
                        
                    
                    <Field className="mb-2"> 
                        <FieldLabel>
                            Концепция
                        </FieldLabel>
                        <Input id="characterType" type="file" accept="image/*" placeholder="загрузите ваш портерт"  onChange={handleImageChange}/>
                        <FieldDescription>
                        Как вы выглядите
                        </FieldDescription>
                    </Field>
                    </div>
                    
                    <div className="mt-4 relative w-48 h-48 border rounded-lg overflow-hidden">
                        {previewImage && (
                            <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                        )}

                    </div>
                    </div>
                    

                </section>
            </form>
        </div>
    )
}