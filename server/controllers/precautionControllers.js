const Precautions = async(req, res) => {
try {
    const disease = req.query.disease;
    if (!disease) {
        return res.status(400).json({ message: "Disease query parameter is required" });
    }

    const precautionsList = {
        flu: ["Wash your hands frequently", "Avoid close contact with sick people", "Stay hydrated"],
        covid: ["Wear a mask", "Maintain social distancing", "Get vaccinated"],
        malaria: ["Use mosquito nets", "Apply insect repellent", "Eliminate standing water"],
    };

    const precautions = precautionsList[disease.toLowerCase()];
    if (!precautions) {
        return res.status(404).json({ message: "Precautions not found for the specified disease" });
    }

    res.status(200).json({ disease, precautions });
    
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

export default Precautions;