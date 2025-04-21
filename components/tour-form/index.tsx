"use client";

// components/TravelForm.tsx
import React from "react"
import DatePicker from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { useState } from 'react';

import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/teal.css";

type TourFormProps = {
    type?: number; // 1, 2, etc. for different form types
};

export default function TourForm({ type = 1 }: TourFormProps) {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        ...(type === 1 && { 
            departureDate: '',
            returnDate: '',
            passengers: 1,
        })
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (

        <form>

            {/* Origin and Destination */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-1">
                <div>
                    <label htmlFor="origin" className="block text-sm font-medium text-gray-400 mb-1">
                        Origin
                    </label>
                    <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="City"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-400 mb-1">
                        Destination
                    </label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="City"
                        required
                    />
                </div>
            </div>

            {/* Dates */}
            {type === 1 && (
            <>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-1">
                    <div>
                        <label htmlFor="departureDate" className="block text-sm font-medium text-gray-400 mb-1">
                            Departure Date
                        </label>
                        {/* <input
                            type="hidden"
                            id="departureDate"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            className=""
                            required
                            min={new Date().toISOString().split('T')[0]} /> */}
                        <div className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"  style={{ direction: "ltr" }}>
                            <DatePicker
                                inputMode="none"
                                className="bg-dark teal"
                                monthYearSeparator="|"
                                // render={<InputIcon/>}
                                calendar={gregorian}
                                locale={gregorian_en}
                                calendarPosition="bottom-right"
                                value={formData.departureDate}
                                required
                            />
                        </div>                            
                    </div>

                    <div>
                        <label htmlFor="returnDate" className="block text-sm font-medium text-gray-400 mb-1">
                            Return Date
                        </label>
                        {/* <input
                            type="text"
                            id="returnDate"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required={true}
                            min={formData.departureDate || new Date().toISOString().split('T')[0]}
                            disabled={!formData.departureDate} /> */}
                        <div className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"  style={{ direction: "ltr" }}>
                            <DatePicker
                                inputMode="none"
                                className="bg-dark teal"
                                monthYearSeparator="|"
                                // render={<InputIcon/>}
                                calendar={gregorian}
                                locale={gregorian_en}
                                calendarPosition="bottom-right"
                                value={formData.returnDate}
                                required
                            />
                        </div>                          
                    </div>
                </div>
                <div className="mb-1">
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-400 mb-1">
                            Passengers
                        </label>
                        <input
                            type="number"
                            id="passengers"
                            name="passengers"
                            value={formData.passengers}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-teal-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 remove-arrow"
                            required={true}
                            min={1} />
                </div>
            </>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full mt-3 bg-teal-800 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
                Search Tours
            </button>
            {formData.departureDate}
        </form>

    );
}