import CaracterForm from "@/components/character-creator/CaracterForm";
import Header from "@/components/header/header";
import { attributes, edges, hindrances, races, skills } from "@/lib/mockData";



export default function Home() {
  return (
    <div className="flex flex-col columb min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <Header/>
      <CaracterForm></CaracterForm>
      {/* <ul>
        {races.map(race => {
          return (
            <li key={race.name}>{race.name} </li>
          )
        }) } 
      </ul>
      <ul>
        {attributes.map(attr=>{
          return (
            <li  key={attr.id}>{attr.name}</li>
          )
        })}
      </ul>
      <ul>
        {skills.map(skill => {
          return ( 
            <li key={skill.id}>{skill.name} </li>
          )
        })}
      </ul>
      <ul>
        {hindrances.map(hindranc=>{
          return (
            <li key={hindranc.id}>{hindranc.name} 
            </li>
          )
        })}
      </ul>
      <ul>
        {edges.map(edge=>{
          return (
            <li key={edge.id}>{edge.name} </li>
          )
        })}
      </ul> */}
    </div>
  );
}
