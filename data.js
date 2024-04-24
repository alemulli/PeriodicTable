window.PeriodicTable = function () {
    return {
        card_classes: 'text-white p-px md:p-1 flex flex-col items-center justify-between rounded-[5px] border-[0.5px] border-[#707070] hover:scale-110 w-full h-full transition-transform duration-300 ease-out',
        sections:{
            section_1 : {
                info: { 
                        group_name: "Alkali Metals", 
                        group_color: "#BE3927", 
                        section_specific_card_classes: '', 
                    },
                elements: [
                    { symbol: "Li", number: "3", name: "Lithium", grid_position: "col-start-1 col-end-2 row-start-2 row-end-3" },
                    { symbol: "Na", number: "11", name: "Sodium", grid_position: "col-start-1 col-end-2 row-start-3 row-end-4" },
                    { symbol: "K", number: "19", name: "Potassium", grid_position: "col-start-1 col-end-2 row-start-4 row-end-5" },
                    { symbol: "Rb", number: "37", name: "Rubidium", grid_position: "col-start-1 col-end-2 row-start-5 row-end-6" },
                    { symbol: "Cs", number: "55", name: "Caesium", grid_position: "col-start-1 col-end-2 row-start-6 row-end-7" },
                    { symbol: "Fr", number: "87", name: "Francium", grid_position: "col-start-1 col-end-2 row-start-7 row-end-8" },
                ],
            },
            section_2 : {
                info: {
                    group_name: "Alkaline Earth Metals",
                    group_color: "#8AC64C",
                    section_specific_card_classes: '', 
                },
                elements: [
                    { symbol: "Be", number: "4", name: "Beryllium", grid_position: "col-start-2 col-end-3 row-start-2 row-end-3" },
                    { symbol: "Mg", number: "12", name: "Magnesium", grid_position: "col-start-2 col-end-3 row-start-3 row-end-4" },
                    { symbol: "Ca", number: "20", name: "Calcium", grid_position: "col-start-2 col-end-3 row-start-4 row-end-5" },
                    { symbol: "Sr", number: "38", name: "Strontium", grid_position: "col-start-2 col-end-3 row-start-5 row-end-6" },
                    { symbol: "Ba", number: "56", name: "Barium", grid_position: "col-start-2 col-end-3 row-start-6 row-end-7" },
                    { symbol: "Ra", number: "88", name: "Radium", grid_position: "col-start-2 col-end-3 row-start-7 row-end-8" },
                ],
            },
            section_3 : {
                info: { 
                    group_name: "Transition Metals", 
                    group_color: "#148690",
                    section_specific_card_classes: '',  
                },
                elements: [
                    { symbol: "Sc", number: "21", name: "Scandium", grid_position: "col-start-3 col-end-4 row-start-4 row-end-5" },
                    { symbol: "Ti", number: "22", name: "Titanium", grid_position: "col-start-5 col-end-6 row-start-4 row-end-5" },
                    { symbol: "V", number: "23", name: "Vanadium", grid_position: "col-start-6 col-end-7 row-start-4 row-end-5" },
                    { symbol: "Cr", number: "24", name: "Chromium", grid_position: "col-start-7 col-end-8 row-start-4 row-end-5" },
                    { symbol: "Mn", number: "25", name: "Manganese", grid_position: "col-start-8 col-end-9 row-start-4 row-end-5" },
                    { symbol: "Fe", number: "26", name: "Iron", grid_position: "col-start-9 col-end-10 row-start-4 row-end-5" },
                    { symbol: "Co", number: "27", name: "Cobalt", grid_position: "col-start-10 col-end-11 row-start-4 row-end-5" },
                    { symbol: "Ni", number: "28", name: "Nickel", grid_position: "col-start-11 col-end-12 row-start-4 row-end-5" },
                    { symbol: "Cu", number: "29", name: "Copper", grid_position: "col-start-12 col-end-13 row-start-4 row-end-5" },
                    { symbol: "Zn", number: "30", name: "Zinc", grid_position: "col-start-13 col-end-[14] row-start-4 row-end-5" },
                    { symbol: "Y", number: "39", name: "Yttrium", grid_position: "col-start-3 col-end-4 row-start-5 row-end-6" },
                    { symbol: "Zr", number: "40", name: "Zirconium", grid_position: "col-start-5 col-end-6 row-start-5 row-end-6" },
                    { symbol: "Nb", number: "41", name: "Niobium", grid_position: "col-start-6 col-end-7 row-start-5 row-end-6" },
                    { symbol: "Mo", number: "42", name: "Molybdenum", grid_position: "col-start-7 col-end-8 row-start-5 row-end-6" },
                    { symbol: "Tc", number: "43", name: "Technetium", grid_position: "col-start-8 col-end-9 row-start-5 row-end-6" },
                    { symbol: "Ru", number: "44", name: "Ruthenium", grid_position: "col-start-9 col-end-10 row-start-5 row-end-6" },
                    { symbol: "Rh", number: "45", name: "Rhodium", grid_position: "col-start-10 col-end-11 row-start-5 row-end-6" },
                    { symbol: "Pd", number: "46", name: "Palladium", grid_position: "col-start-11 col-end-12 row-start-5 row-end-6" },
                    { symbol: "Ag", number: "47", name: "Silver", grid_position: "col-start-12 col-end-13 row-start-5 row-end-6" },
                    { symbol: "Cd", number: "48", name: "Cadmium", grid_position: "col-start-13 col-end-[14] row-start-5 row-end-6" },
                    { symbol: "Hf", number: "72", name: "Hafnium", grid_position: "col-start-5 col-end-6 row-start-6 row-end-7" },
                    { symbol: "Ta", number: "73", name: "Tantalum", grid_position: "col-start-6 col-end-7 row-start-6 row-end-7" },
                    { symbol: "W", number: "74", name: "Tungsten", grid_position: "col-start-7 col-end-8 row-start-6 row-end-7" },
                    { symbol: "Re", number: "75", name: "Rhenium", grid_position: "col-start-8 col-end-9 row-start-6 row-end-7" },
                    { symbol: "Os", number: "76", name: "Osmium", grid_position: "col-start-9 col-end-10 row-start-6 row-end-7" },
                    { symbol: "Ir", number: "77", name: "Iridium", grid_position: "col-start-10 col-end-11 row-start-6 row-end-7" },
                    { symbol: "Pt", number: "78", name: "Platinum", grid_position: "col-start-11 col-end-12 row-start-6 row-end-7" },
                    { symbol: "Au", number: "79", name: "Gold", grid_position: "col-start-12 col-end-13 row-start-6 row-end-7" },
                    { symbol: "Hg", number: "80", name: "Mercury", grid_position: "col-start-13 col-end-[14] row-start-6 row-end-7" },
                    { symbol: "Rf", number: "104", name: "Rutherfordium", grid_position: "col-start-5 col-end-6 row-start-7 row-end-8" },
                    { symbol: "Db", number: "105", name: "Dubnium", grid_position: "col-start-6 col-end-7 row-start-7 row-end-8" },
                    { symbol: "Sg", number: "106", name: "Seaborgium", grid_position: "col-start-7 col-end-8 row-start-7 row-end-8" },
                    { symbol: "Bh", number: "107", name: "Bohrium", grid_position: "col-start-8 col-end-9 row-start-7 row-end-8" },
                    { symbol: "Hs", number: "108", name: "Hassium", grid_position: "col-start-9 col-end-10 row-start-7 row-end-8" },
                    { symbol: "Mt", number: "109", name: "Meitnerium", grid_position: "col-start-10 col-end-11 row-start-7 row-end-8" },
                    { symbol: "Ds", number: "110", name: "Darmstadtium", grid_position: "col-start-11 col-end-12 row-start-7 row-end-8" },
                    { symbol: "Rg", number: "111", name: "Roentgenium", grid_position: "col-start-12 col-end-13 row-start-7 row-end-8" },
                    { symbol: "Cn", number: "112", name: "Copernicium", grid_position: "col-start-13 col-end-[14] row-start-7 row-end-8" }
                ],
            },
            section_4 : {
                info: {
                    group_name: "Post-Transition Metals",
                    group_color: "#DCE0CC",
                    section_specific_card_classes: '!text-black', 
                },
                elements: [
                    { symbol: "Al", number: "13", name: "Aluminum", grid_position: "col-start-[14] col-end-[15] row-start-3 row-end-4" },
                    { symbol: "Ga", number: "31", name: "Gallium", grid_position: "col-start-[14] col-end-[15] row-start-4 row-end-5" },
                    { symbol: "In", number: "49", name: "Indium", grid_position: "col-start-[14] col-end-[15] row-start-5 row-end-6" },
                    { symbol: "Sn", number: "50", name: "Tin", grid_position: "col-start-[15] col-end-[16] row-start-5 row-end-6" },
                    { symbol: "Tl", number: "81", name: "Thallium", grid_position: "col-start-[14] col-end-[15] row-start-6 row-end-7" },
                    { symbol: "Pb", number: "82", name: "Lead", grid_position: "col-start-[15] col-end-[16] row-start-6 row-end-7" },
                    { symbol: "Bi", number: "83", name: "Bismuth", grid_position: "col-start-[16] col-end-[17] row-start-6 row-end-7" },
                    { symbol: "Nh", number: "113", name: "Nihonium", grid_position: "col-start-[14] col-end-[15] row-start-7 row-end-8" },
                    { symbol: "Fl", number: "114", name: "Flerovium", grid_position: "col-start-[15] col-end-[16] row-start-7 row-end-8" },
                    { symbol: "Mc", number: "115", name: "Moscovium", grid_position: "col-start-[16] col-end-[17] row-start-7 row-end-8" },
                    { symbol: "Lv", number: "116", name: "Livermorium", grid_position: "col-start-[17] col-end-[18] row-start-7 row-end-8" },
                ],
            },
            section_5 : {
                info: { 
                    group_name: "Metalloids", 
                    group_color: "#4C6CA5", 
                    section_specific_card_classes: '', 
                },
                elements: [
                    { symbol: "B", number: "5", name: "Boron", grid_position: "col-start-[14] col-end-[15] row-start-2 row-end-3" },
                    { symbol: "Si", number: "14", name: "Silicon", grid_position: "col-start-[15] col-end-[16] row-start-3 row-end-4" },
                    { symbol: "Ge", number: "32", name: "Germanium", grid_position: "col-start-[15] col-end-[16] row-start-4 row-end-5" },
                    { symbol: "As", number: "33", name: "Arsenic", grid_position: "col-start-[16] col-end-[17] row-start-4 row-end-5" },
                    { symbol: "Sb", number: "51", name: "Antimony", grid_position: "col-start-[16] col-end-[17] row-start-5 row-end-6" },
                    { symbol: "Te", number: "52", name: "Tellurium", grid_position: "col-start-[17] col-end-[18] row-start-5 row-end-6" },
                    { symbol: "Po", number: "84", name: "Polonium", grid_position: "col-start-[17] col-end-[18]  row-start-6 row-end-7" },
                ],
            },
            section_6 : {
                info: { 
                    group_name: "Nonmetals", 
                    group_color: "#D35A28", 
                    section_specific_card_classes: '', 
                },
                elements: [
                    { symbol: "H", number: "1", name: "Hydrogen", grid_position: "col-start-1 col-end-2 row-start-1 row-end-2" },
                    { symbol: "C", number: "6", name: "Carbon", grid_position: "col-start-[15] col-end-[16] row-start-2 row-end-3" },
                    { symbol: "N", number: "7", name: "Nitrogen", grid_position: "col-start-[16] col-end-[17] row-start-2 row-end-3" },
                    { symbol: "O", number: "8", name: "Oxygen", grid_position: "col-start-[17] col-end-[18] row-start-2 row-end-3" },
                    { symbol: "F", number: "9", name: "Fluorine", grid_position: "col-start-[18] col-end-[19] row-start-2 row-end-3" },
                    { symbol: "P", number: "15", name: "Phosphorus", grid_position: "col-start-[16] col-end-[17] row-start-3 row-end-4" },
                    { symbol: "S", number: "16", name: "Sulfur", grid_position: "col-start-[17] col-end-[18] row-start-3 row-end-4" },
                    { symbol: "Cl", number: "17", name: "Chlorine", grid_position: "col-start-[18] col-end-[19] row-start-3 row-end-4" },
                    { symbol: "Se", number: "34", name: "Selenium", grid_position: "col-start-[17] col-end-[18] row-start-4 row-end-5" },
                    { symbol: "Br", number: "35", name: "Bromine", grid_position: "col-start-[18] col-end-[19] row-start-4 row-end-5" },
                    { symbol: "I", number: "53", name: "Iodine", grid_position: "col-start-[18] col-end-[19] row-start-5 row-end-6" },
                    { symbol: "At", number: "85", name: "Astatine", grid_position: "col-start-[18] col-end-[19] row-start-6 row-end-7" },
                    { symbol: "Ts", number: "117", name: "Tennessine", grid_position: "col-start-[18] col-end-[19] row-start-7 row-end-8" }
                ],
            },
            section_7 : {
                info: { 
                    group_name: "Noble Gasses", 
                    group_color: "#1B8490", 
                    section_specific_card_classes: '', 
                },
                elements: [
                    { symbol: "He", number: "2", name: "Helium", grid_position: "col-start-[19] col-end-[20] row-start-1 row-end-2" },
                    { symbol: "Ne", number: "10", name: "Neon", grid_position: "col-start-[19] col-end-[20] row-start-2 row-end-3" },
                    { symbol: "Ar", number: "18", name: "Argon", grid_position: "col-start-[19] col-end-[20] row-start-3 row-end-4" },
                    { symbol: "Kr", number: "36", name: "Krypton", grid_position: "col-start-[19] col-end-[20] row-start-4 row-end-5" },
                    { symbol: "Xe", number: "54", name: "Xenon", grid_position: "col-start-[19] col-end-[20] row-start-5 row-end-6" },
                    { symbol: "Rn", number: "86", name: "Radon", grid_position: "col-start-[19] col-end-[20] row-start-6 row-end-7" },
                    { symbol: "Og", number: "118", name: "Oganesson", grid_position: "col-start-[19] col-end-[20] row-start-7 row-end-8" },
                ],
            },
            section_8 : {
                info: { 
                    group_name: "Lanthanoids", 
                    group_color: "#426D3E", 
                    section_specific_card_classes: '', 
                },
                elements: [
                    // { symbol: "La", number: "57", name: "Lanthanum", grid_position: "col-start-5 col-end-6 row-start-9 row-end-10" },
                    // { symbol: "Ce", number: "58", name: "Cerium", grid_position: "col-start-6 col-end-7 row-start-9 row-end-10" },
                    // { symbol: "Pr", number: "59", name: "Praseodymium", grid_position: "col-start-7 col-end-8 row-start-9 row-end-10" },
                    // { symbol: "Nd", number: "60", name: "Neodymium", grid_position: "col-start-8 col-end-9 row-start-9 row-end-10" },
                    // { symbol: "Pm", number: "61", name: "Promethium", grid_position: "col-start-9 col-end-10 row-start-9 row-end-10" },
                    // { symbol: "Sm", number: "62", name: "Samarium", grid_position: "col-start-10 col-end-11 row-start-9 row-end-10" },
                    // { symbol: "Eu", number: "63", name: "Europium", grid_position: "col-start-11 col-end-12 row-start-9 row-end-10" },
                    // { symbol: "Gd", number: "64", name: "Gadolinium", grid_position: "col-start-12 col-end-13 row-start-9 row-end-10" },
                    // { symbol: "Tb", number: "65", name: "Terbium", grid_position: "col-start-13 col-end-[14] row-start-9 row-end-10" },
                    // { symbol: "Dy", number: "66", name: "Dysprosium", grid_position: "col-start-[14] col-end-[15] row-start-9 row-end-10" },
                    // { symbol: "Ho", number: "67", name: "Holmium", grid_position: "col-start-[15] col-end-[16] row-start-9 row-end-10" },
                    // { symbol: "Er", number: "68", name: "Erbium", grid_position: "col-start-[16] col-end-[17] row-start-9 row-end-10" },
                    // { symbol: "Tm", number: "69", name: "Thulium", grid_position: "col-start-[17] col-end-[18] row-start-9 row-end-10" },
                    // { symbol: "Yb", number: "70", name: "Ytterbium", grid_position: "col-start-[18] col-end-[19] row-start-9 row-end-10" },
                    // { symbol: "Lu", number: "71", name: "Lutetium", grid_position: "col-start-[19] col-end-[20] row-start-9 row-end-10" },
        
                    // ALT LAYOUT
                    { symbol: "La", number: "57", name: "Lanthanum", grid_position: "col-start-3 col-end-4 row-start-6 row-end-7" },
                    { symbol: "Ce", number: "58", name: "Cerium", grid_position: "col-start-5 col-end-6 row-start-9 row-end-10" },
                    { symbol: "Pr", number: "59", name: "Praseodymium", grid_position: "col-start-6 col-end-7 row-start-9 row-end-10" },
                    { symbol: "Nd", number: "60", name: "Neodymium", grid_position: "col-start-7 col-end-8 row-start-9 row-end-10" },
                    { symbol: "Pm", number: "61", name: "Promethium", grid_position: "col-start-8 col-end-9 row-start-9 row-end-10" },
                    { symbol: "Sm", number: "62", name: "Samarium", grid_position: "col-start-9 col-end-10 row-start-9 row-end-10" },
                    { symbol: "Eu", number: "63", name: "Europium", grid_position: "col-start-10 col-end-11 row-start-9 row-end-10" },
                    { symbol: "Gd", number: "64", name: "Gadolinium", grid_position: "col-start-11 col-end-12 row-start-9 row-end-10" },
                    { symbol: "Tb", number: "65", name: "Terbium", grid_position: "col-start-12 col-end-13 row-start-9 row-end-10" },
                    { symbol: "Dy", number: "66", name: "Dysprosium", grid_position: "col-start-13 col-end-[14] row-start-9 row-end-10" },
                    { symbol: "Ho", number: "67", name: "Holmium", grid_position: "col-start-[14] col-end-[15] row-start-9 row-end-10" },
                    { symbol: "Er", number: "68", name: "Erbium", grid_position: "col-start-[15] col-end-[16] row-start-9 row-end-10" },
                    { symbol: "Tm", number: "69", name: "Thulium", grid_position: "col-start-[16] col-end-[17] row-start-9 row-end-10" },
                    { symbol: "Yb", number: "70", name: "Ytterbium", grid_position: "col-start-[17] col-end-[18] row-start-9 row-end-10" },
                    { symbol: "Lu", number: "71", name: "Lutetium", grid_position: "col-start-[18] col-end-[19] row-start-9 row-end-10" },
                ],
            },
            info : {
                info: { 
                    group_name: "Actinoids", 
                    group_color: "#A33302", 
                    section_specific_card_classes: '', 
                },
                elements: [
                    // { symbol: "Ac", number: "89", name: "Actinium", grid_position: "col-start-5 col-end-6 row-start-10 row-end-11" },
                    // { symbol: "Th", number: "90", name: "Thorium", grid_position: "col-start-6 col-end-7 row-start-10 row-end-11" },
                    // { symbol: "Pa", number: "91", name: "Protactinium", grid_position: "col-start-7 col-end-8 row-start-10 row-end-11" },
                    // { symbol: "U", number: "92", name: "Uranium", grid_position: "col-start-8 col-end-9 row-start-10 row-end-11" },
                    // { symbol: "Np", number: "93", name: "Neptunium", grid_position: "col-start-9 col-end-10 row-start-10 row-end-11" },
                    // { symbol: "Pu", number: "94", name: "Plutonium", grid_position: "col-start-10 col-end-11 row-start-10 row-end-11" },
                    // { symbol: "Am", number: "95", name: "Americium", grid_position: "col-start-11 col-end-12 row-start-10 row-end-11" },
                    // { symbol: "Cm", number: "96", name: "Curium", grid_position: "col-start-12 col-end-13 row-start-10 row-end-11" },
                    // { symbol: "Bk", number: "97", name: "Berkelium", grid_position: "col-start-13 col-end-[14] row-start-10 row-end-11" },
                    // { symbol: "Cf", number: "98", name: "Californium", grid_position: "col-start-[14] col-end-[15] row-start-10 row-end-11" },
                    // { symbol: "Es", number: "99", name: "Einsteinium", grid_position: "col-start-[15] col-end-[16] row-start-10 row-end-11" },
                    // { symbol: "Fm", number: "100", name: "Fermium", grid_position: "col-start-[16] col-end-[17] row-start-10 row-end-11" },
                    // { symbol: "Md", number: "101", name: "Mendelevium", grid_position: "col-start-[17] col-end-[18] row-start-10 row-end-11" },
                    // { symbol: "No", number: "102", name: "Nobelium", grid_position: "col-start-[18] col-end-[19] row-start-10 row-end-11" },
                    // { symbol: "Lr", number: "103", name: "Lawrencium", grid_position: "col-start-[19] col-end-[20] row-start-10 row-end-11" },
        
                    // ALT LAYOUT
                    { symbol: "Ac", number: "89", name: "Actinium", grid_position: "col-start-3 col-end-4 row-start-7 row-end-8" },
                    { symbol: "Th", number: "90", name: "Thorium", grid_position: "col-start-5 col-end-6 row-start-10 row-end-11" },
                    { symbol: "Pa", number: "91", name: "Protactinium", grid_position: "col-start-6 col-end-7 row-start-10 row-end-11" },
                    { symbol: "U", number: "92", name: "Uranium", grid_position: "col-start-7 col-end-8 row-start-10 row-end-11" },
                    { symbol: "Np", number: "93", name: "Neptunium", grid_position: "col-start-8 col-end-9 row-start-10 row-end-11" },
                    { symbol: "Pu", number: "94", name: "Plutonium", grid_position: "col-start-9 col-end-10 row-start-10 row-end-11" },
                    { symbol: "Am", number: "95", name: "Americium", grid_position: "col-start-10 col-end-11 row-start-10 row-end-11" },
                    { symbol: "Cm", number: "96", name: "Curium", grid_position: "col-start-11 col-end-12 row-start-10 row-end-11" },
                    { symbol: "Bk", number: "97", name: "Berkelium", grid_position: "col-start-12 col-end-13 row-start-10 row-end-11" },
                    { symbol: "Cf", number: "98", name: "Californium", grid_position: "col-start-13 col-end-[14] row-start-10 row-end-11" },
                    { symbol: "Es", number: "99", name: "Einsteinium", grid_position: "col-start-[14] col-end-[15] row-start-10 row-end-11" },
                    { symbol: "Fm", number: "100", name: "Fermium", grid_position: "col-start-[15] col-end-[16] row-start-10 row-end-11" },
                    { symbol: "Md", number: "101", name: "Mendelevium", grid_position: "col-start-[16] col-end-[17] row-start-10 row-end-11" },
                    { symbol: "No", number: "102", name: "Nobelium", grid_position: "col-start-[17] col-end-[18] row-start-10 row-end-11" },
                    { symbol: "Lr", number: "103", name: "Lawrencium", grid_position: "col-start-[18] col-end-[19] row-start-10 row-end-11" },
                ],
            },
           
        },
  };
};
