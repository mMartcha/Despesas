export const mockDashboard = {
  day: {
    total: 1432.0,
    // Dia: foco maior em Alimentação e pedágio
    categories: [
      { label: "Hospedagem",    percent: 10, value: 143.20, color: "#7B2D00" },
      { label: "Alimentação",   percent: 30, value: 429.60, color: "#F26B1D" },
      { label: "Passagem",      percent: 12, value: 171.84, color: "#FF8A3D" },
      { label: "Abastecimento", percent:  8, value: 114.56, color: "#7B2D00" },
      { label: "Transporte",    percent: 15, value: 214.80, color: "#E56425" },
      { label: "Pedagio",       percent: 15, value: 214.80, color: "#FF9B4A" },
      { label: "Outros",        percent: 10, value: 143.20, color: "#7B2D00" },
    ],
  },

  week: {
    total: 8290.50,
    // Semana: distribuição mais equilibrada
    categories: [
      { label: "Hospedagem",    percent: 18, value: 1492.29, color: "#7B2D00" },
      { label: "Alimentação",   percent: 26, value: 2155.53, color: "#F26B1D" },
      { label: "Passagem",      percent: 14, value: 1160.67, color: "#FF8A3D" },
      { label: "Abastecimento", percent:  7, value:  580.34, color: "#7B2D00" },
      { label: "Transporte",    percent: 16, value: 1326.48, color: "#E56425" },
      { label: "Pedagio",       percent: 12, value:  994.86, color: "#FF9B4A" },
      { label: "Outros",        percent:  7, value:  580.34, color: "#7B2D00" },
    ],
  },

  month: {
    total: 31240.0,
    // Mês: hospedagem cresce; pedágio/transporte relevantes
    categories: [
      { label: "Hospedagem",    percent: 22, value: 6872.80, color: "#7B2D00" },
      { label: "Alimentação",   percent: 20, value: 6248.00, color: "#F26B1D" },
      { label: "Passagem",      percent: 16, value: 4998.40, color: "#FF8A3D" },
      { label: "Abastecimento", percent:  6, value: 1874.40, color: "#7B2D00" },
      { label: "Transporte",    percent: 14, value: 4373.60, color: "#E56425" },
      { label: "Pedagio",       percent: 15, value: 4686.00, color: "#FF9B4A" },
      { label: "Outros",        percent:  7, value: 2186.80, color: "#7B2D00" },
    ],
  },

  year: {
    total: 377000.0,
    // Ano: hospedagem e passagem pesam mais
    categories: [
      { label: "Hospedagem",    percent: 28, value: 105560.00, color: "#7B2D00" },
      { label: "Alimentação",   percent: 18, value:  67860.00, color: "#F26B1D" },
      { label: "Passagem",      percent: 20, value:  75400.00, color: "#FF8A3D" },
      { label: "Abastecimento", percent:  5, value:  18850.00, color: "#7B2D00" },
      { label: "Transporte",    percent: 12, value:  45240.00, color: "#E56425" },
      { label: "Pedagio",       percent: 12, value:  45240.00, color: "#FF9B4A" },
      { label: "Outros",        percent:  5, value:  18850.00, color: "#7B2D00" },
    ],
  },
};
