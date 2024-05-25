"use client"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions} from '@headlessui/react'
import { useState } from "react"


const test: Array<string> = ["Birtext","cukiex", "birkiex"]	

//TODO: Search through
export default function SearchBar() {
	
	const [selectedAccount, setSelectedAccount] = useState("")
	const [query, setQuery] = useState("");

	const filteredPeople =
    query === ''
      ? test
      : test.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

	return(
		<Combobox value={selectedAccount} onChange={setSelectedAccount} >
			<ComboboxInput 	
				aria-label="Assignee"
				displayValue={(person: string)=>(person)}
				onChange={(event)=> setQuery(event.target.value)}
			/>
			<ComboboxOptions>
				{filteredPeople.map((person)=> (
					<ComboboxOption key={person} value={person}>
						{person}
					</ComboboxOption>
				))}	
			</ComboboxOptions>
		</Combobox>
	)
}



//<input type="text" className="min-w-half w-5/12 h-vh bg-search-grey rounded border-2 border-black"></input>
