

const Rhinitis =  async(req,res) => {
    try {
        const questions = [
            {
              id: 1,
              category: "Symptoms",
              question: "Rate daytime fatigue due to nasal blockage (1–5).",
              type: "scale"
            },
            {
              id: 2,
              category: "Lifestyle",
              question: "Do you avoid nasal rinses due to discomfort or lack of time?",
              type: "yesno"
            },
            {
              id: 3,
              category: "Environment",
              question: "Is your home exposed to vehicle exhaust or industrial smoke?",
              type: "yesno"
            },
            {
              id: 4,
              category: "Adaptability",
              question: "Do cold mornings/dry winters trigger congestion?",
              type: "yesno"
            },
            {
              id: 5,
              category: "Medical History",
              question: "Have you been diagnosed with nasal polyps?",
              type: "yesno"
            },
            {
              id: 6,
              category: "Behavioral Feasibility",
              question: "Would you use air conditioning if it increases electricity bills?",
              type: "yesnomaybe"
            },
            {
              id: 7,
              category: "Geographical Feasibility",
              question: "Is your area prone to wildfires or crop-burning smoke?",
              type: "yesno"
            },
            {
              id: 8,
              category: "Behavioral Feasibility",
              question: "Do you avoid masks due to breathing discomfort or social stigma?",
              type: "yesno"
            },
            {
              id: 9,
              category: "Geographical Feasibility",
              question: "Is your rental home poorly insulated, making temperature control difficult?",
              type: "yesno"
            },
            {
              id: 10,
              category: "Behavioral Feasibility",
              question: "Do you smoke due to social/cultural habits despite allergies?",
              type: "yesno"
            }
          ];
    return res.status(200).json({message: "Success", data: questions});  
    } catch (error) {
        console.log(error);
    return res.status(500).json({message: "Internal server error"});
        
    }
};

const Mite = async(req, res) => {
    try {
        const questions = [
            {
              id: 1,
              category: "Symptoms",
              question: "Rate skin reactions after insect bites (1–5).",
              type: "scale"
            },
            {
              id: 2,
              category: "Lifestyle",
              question: "Do you avoid insect repellents due to skin sensitivity or smell?",
              type: "yesno"
            },
            {
              id: 3,
              category: "Environment",
              question: "Is stagnant water common in your area due to poor drainage?",
              type: "yesno"
            },
            {
              id: 4,
              category: "Adaptability",
              question: "Do mosquito bites increase during monsoon?",
              type: "yesno"
            },
            {
              id: 5,
              category: "Medical History",
              question: "Have you experienced anaphylaxis from insect bites?",
              type: "yesno"
            },
            {
              id: 6,
              category: "Behavioral Feasibility",
              question: "Would you use mosquito nets if they are considered inconvenient?",
              type: "yesnomaybe"
            },
            {
              id: 7,
              category: "Geographical Feasibility",
              question: "Is fogging/larviciding rare in your locality?",
              type: "yesno"
            },
            {
              id: 8,
              category: "Behavioral Feasibility",
              question: "Do you store food uncovered due to lack of airtight containers?",
              type: "yesno"
            },
            {
              id: 9,
              category: "Geographical Feasibility",
              question: "Is your area prone to open sewage or untreated garbage dumps?",
              type: "yesno"
            },
            {
              id: 10,
              category: "Behavioral Feasibility",
              question: "Do you avoid professional pest control due to cost or distrust?",
              type: "yesno"
            }
          ];

          return res.status(200).json({message: "Success", data: questions});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
        
    }
};


const Insect = async(req, res) => {
    try {
        const questions = [
            {
              id: 1,
              category: "Symptoms",
              question: "Rate skin reactions after insect bites (1–5).",
              type: "scale"
            },
            {
              id: 2,
              category: "Lifestyle",
              question: "Do you avoid insect repellents due to skin sensitivity or smell?",
              type: "yesno"
            },
            {
              id: 3,
              category: "Environment",
              question: "Is stagnant water common in your area due to poor drainage?",
              type: "yesno"
            },
            {
              id: 4,
              category: "Adaptability",
              question: "Do mosquito bites increase during monsoon?",
              type: "yesno"
            },
            {
              id: 5,
              category: "Medical History",
              question: "Have you experienced anaphylaxis from insect bites?",
              type: "yesno"
            },
            {
              id: 6,
              category: "Behavioral Feasibility",
              question: "Would you use mosquito nets if they are considered inconvenient?",
              type: "yesnomaybe"
            },
            {
              id: 7,
              category: "Geographical Feasibility",
              question: "Is fogging/larviciding rare in your locality?",
              type: "yesno"
            },
            {
              id: 8,
              category: "Behavioral Feasibility",
              question: "Do you store food uncovered due to lack of airtight containers?",
              type: "yesno"
            },
            {
              id: 9,
              category: "Geographical Feasibility",
              question: "Is your area prone to open sewage or untreated garbage dumps?",
              type: "yesno"
            },
            {
              id: 10,
              category: "Behavioral Feasibility",
              question: "Do you avoid professional pest control due to cost or distrust?",
              type: "yesno"
            }
          ];
          return res.status(200).json({message: "Success", data: questions});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
        
    }
};



const Mold = async(req, res) => {
    try {
        const questions = [
            {
              id: 1,
              category: "Symptoms",
              question: "Rate coughing/sinus headaches during mold season (1–5).",
              type: "scale"
            },
            {
              id: 2,
              category: "Lifestyle",
              question: "Do you avoid using exhaust fans due to electricity costs?",
              type: "yesno"
            },
            {
              id: 3,
              category: "Environment",
              question: "Are mold patches visible in your home (e.g., walls, ceilings)?",
              type: "yesno"
            },
            {
              id: 4,
              category: "Adaptability",
              question: "Do symptoms worsen during rainy/humid months?",
              type: "yesno"
            },
            {
              id: 5,
              category: "Medical History",
              question: "Have you used antifungal medications?",
              type: "yesno"
            },
            {
              id: 6,
              category: "Behavioral Feasibility",
              question: "Would you relocate if mold is pervasive in your home?",
              type: "yesnomaybe"
            },
            {
              id: 7,
              category: "Geographical Feasibility",
              question: "Is your region prone to flooding or waterlogging?",
              type: "yesno"
            },
            {
              id: 8,
              category: "Behavioral Feasibility",
              question: "Do you delay fixing leaks due to cost or landlord restrictions?",
              type: "yesno"
            },
            {
              id: 9,
              category: "Geographical Feasibility",
              question: "Is natural ventilation limited due to high pollution or security concerns?",
              type: "yesno"
            },
            {
              id: 10,
              category: "Behavioral Feasibility",
              question: "Do you store firewood/compost indoors due to lack of outdoor space?",
              type: "yesno"
            }
          ];
          return res.status(200).json({message: "Success", data: questions});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
        
    }
};

const Pollen = async(req, res) => {
    try {
        const questions = [
            {
              id: 1,
              category: "Symptoms",
              question: "Rate sneezing/itchy eyes severity during pollen season (1–5).",
              type: "scale"
            },
            {
              id: 2,
              category: "Lifestyle",
              question: "Do you avoid wearing masks outdoors due to discomfort or social stigma?",
              type: "yesno"
            },
            {
              id: 3,
              category: "Environment",
              question: "Is your home surrounded by flowering trees (e.g., neem, pine)?",
              type: "yesno"
            },
            {
              id: 4,
              category: "Adaptability",
              question: "Do symptoms worsen during windy days or sudden temperature changes?",
              type: "yesno"
            },
            {
              id: 5,
              category: "Medical History",
              question: "Have you used antihistamines or nasal sprays?",
              type: "yesno"
            },
            {
              id: 6,
              category: "Behavioral Feasibility",
              question: "Would you invest in an air purifier if pollen levels are high?",
              type: "yesnomaybe"
            },
            {
              id: 7,
              category: "Geographical Feasibility",
              question: "Does your region experience frequent power cuts, making air purifiers impractical?",
              type: "yesno"
            },
            {
              id: 8,
              category: "Behavioral Feasibility",
              question: "Do you avoid closing windows due to poor ventilation or cultural preferences?",
              type: "yesno"
            },
            {
              id: 9,
              category: "Geographical Feasibility",
              question: "Are flowering plants/grasslands common in your area?",
              type: "yesno"
            },
            {
              id: 10,
              category: "Behavioral Feasibility",
              question: "Do you skip showers after outdoor activities due to water scarcity or time constraints?",
              type: "yesno"
            }
          ];
          return res.status(200).json({message: "Success", data: questions});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
        
    }
};


export {
    Rhinitis,
    Mite,
    Insect,
    Mold,
    Pollen
}