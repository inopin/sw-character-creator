import { attributes, edges, hindrances, races, skills } from "@/lib/mockData";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {races.map(race => {
          return (
            <li>{race.name} key={race.name}</li>
          )
        }) }
      </ul>
      <ul>
        {attributes.map(attr=>{
          return (
            <li>{attr.name} key={attr.id}</li>
          )
        })}
      </ul>
      <ul>
        {skills.map(skill => {
          return ( 
            <li>{skill.name} key={skill.id}</li>
          )
        })}
      </ul>
      <ul>
        {hindrances.map(hindranc=>{
          return (
            <li>{hindranc.name} key={hindranc.id}
            </li>
          )
        })}
      </ul>
      <ul>
        {edges.map(edge=>{
          return (
            <li>{edge.name} key={edge.id}</li>
          )
        })}
      </ul>
    </div>
  );
}
