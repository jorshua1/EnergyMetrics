"use client";
import Select from "react-select";
import {countryMapping, regionData} from "../utils/optionsData";
import {RenewableEnergy} from "@/app/utils/optionsRealData";
import {useState} from "react";

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,

        background: "none", // Cambiar el color de fondo del control
        borderColor: "blue", // Cambiar el color del borde del control
        color: "black", // Cambiar el color del texto dentro del control
        padding: "10px 30px 10px 40px",
        fontSize: "24px", // Cambiar el tamaño de la fuente del texto dentro del control
        fontWeight: "400",
        letterSpacing: "-0.05em",
    }),
    option: (provided: any, state: { isSelected: any }) => ({
        ...provided,
        color: state.isSelected ? "white" : "black", // Cambiar el color del texto de la opción
        background: state.isSelected ? "#1e293b" : "rgb(241 245 249)", // Cambiar el color de fondo de la opción
        padding: "20px 30px 20px 40px", // Cambiar el relleno de la opción
        fontSize: " 1.125rem", // Cambiar el tamaño de la fuente del texto de la opción
        lineHeight: "1.75rem",
        fontWeight: "light", // Cambiar el peso de la fuente del texto de la opción
        letterSpacing: "-0.05em",
        ":hover": {
            background: "#1e293b",
            color: "white",
            cursor: "pointer",
        },
    }),
};

export default function SelectorBar() {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
    const [isCountryDropdownDisabled, setIsCountryDropdownDisabled] = useState(true);

    const handleOptions = (option: any) => {
        setSelectedRegion(null);
        setSelectedCountry(null)
    }
    const handleRegionChange = (option: any) => {
        setSelectedRegion(option);
        setIsCountryDropdownDisabled(option.value === 'all');
        if (option.value === 'all') {
            setSelectedCountry(null);
        } else {
            // @ts-ignore
            setCountryOptions(countryMapping[option.value]);
        }
    };


    return (
        <div className="h-[180px] z-50 relative rounded-tl-2xl flex border-b-2 border-slate-200">
            <div className="w-1/3 h-full flex flex-col justify-center border-r-[1px] border-slate-200">
        <span className="py-3 px-10 tracking-tighter text-lg text-slate-500">
          Select Stats
        </span>
                <Select
                    options={RenewableEnergy}
                    unstyled
                    styles={customStyles}
                    defaultValue={RenewableEnergy[0]}
                    onChange={handleOptions}
                    instanceId={RenewableEnergy[0].value}
                />
            </div>
            <div className="w-1/3 h-full flex flex-col justify-center border-r-[1px] border-slate-200">
        <span className="py-3 px-10 tracking-tighter text-lg text-slate-500">
          Select Region
        </span>
                <Select
                    unstyled
                    styles={customStyles}
                    options={regionData}
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    instanceId={regionData[0].value}
                    //defaultInputValue={regionData[0].value}
                />
            </div>
            <div className="w-1/3 h-full flex flex-col justify-center border-r-[1px] border-slate-200">
        <span className="py-3 px-10 tracking-tighter text-lg text-slate-500">
          Select Country
        </span>
                <Select
                    unstyled
                    styles={customStyles}
                    isDisabled={isCountryDropdownDisabled}
                    value={selectedCountry}
                    onChange={(option) => setSelectedCountry(option)}
                    options={countryOptions}
                    placeholder="Select Country"
                    instanceId={regionData[0].value}
                />
            </div>
        </div>
    );
}
