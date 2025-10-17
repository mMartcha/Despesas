export const mockDashboard = {
  day: {
    total: 1432.0,
    categories: [
      { label: "Hospedagem",    percent: 10, value: 143.20, color: "#892D00" },
      { label: "Alimentação",   percent: 30, value: 429.60, color: "#E56425" },
      { label: "Passagem",      percent: 12, value: 171.84, color: "#F8A05E" },
      { label: "Abastecimento", percent:  8, value: 114.56, color: "#F3C178" },
      { label: "Transporte",    percent: 15, value: 214.80, color: "#A3B18A" },
      { label: "Pedagio",       percent: 15, value: 214.80, color: "#BD4D2C" },
      { label: "Outros",        percent: 10, value: 143.20, color: "#6B6054" },
    ],
  },

  // Barras por dia da semana (sem donut). percent = (value/total)*100
  week: {
    total: 8290.50,
    categories: [
      { label: "Segunda", percent: (820.90 / 8290.50) * 100, value:  820.90, color: "#E56425" },
      { label: "Terça",   percent: (1450.00/ 8290.50) * 100, value: 1450.00, color: "#E56425" },
      { label: "Quarta",  percent: (980.30 / 8290.50) * 100, value:  980.30, color: "#E56425" },
      { label: "Quinta",  percent: (1250.40/ 8290.50) * 100, value: 1250.40, color: "#E56425" },
      { label: "Sexta",   percent: (1350.60/ 8290.50) * 100, value: 1350.60, color: "#E56425" },
      { label: "Sábado",  percent: (1600.00/ 8290.50) * 100, value: 1600.00, color: "#E56425" },
      { label: "Domingo", percent: (838.30 / 8290.50) * 100, value:  838.30, color: "#E56425" },
    ],
  },

       month: {
    total: 31240.0,
    categories: [
      { label: "Semana 1", percent: (8200.00 / 31240.0) * 100, value:  8200.00, color: "#E56425" },
      { label: "Semana 2", percent: (7800.00 / 31240.0) * 100, value:  7800.00, color: "#E56425" },
      { label: "Semana 3", percent: (7000.00 / 31240.0) * 100, value:  7000.00, color: "#E56425" },
      { label: "Semana 4", percent: (8240.00 / 31240.0) * 100, value:  8240.00, color: "#E56425" },
    ],
  },

  year: {
    total: 377000.0,
    categories: [
      { label: "Hospedagem",    percent: 28, value: 105560.00, color: "#892D00" },
      { label: "Alimentação",   percent: 18, value:  67860.00, color: "#E56425" },
      { label: "Passagem",      percent: 20, value:  75400.00, color: "#F8A05E" },
      { label: "Abastecimento", percent:  5, value:  18850.00, color: "#F3C178" },
      { label: "Transporte",    percent: 12, value:  45240.00, color: "#A3B18A" },
      { label: "Pedagio",       percent: 12, value:  45240.00, color: "#BD4D2C" },
      { label: "Outros",        percent:  5, value:  18850.00, color: "#6B6054" },
    ],
  },
} as const;
