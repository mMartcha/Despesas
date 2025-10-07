export type Category = { name: string; percent: number; color: string };

export async function getDailyReport() {
  await new Promise(r => setTimeout(r, 150));
  const categories: Category[] = [
    { name: 'Hospedagem',   percent: 13, color: '#7B2D00' },
    { name: 'Alimentação',  percent: 25, color: '#F26B1D' },
    { name: 'Transporte',   percent: 18, color: '#F6A57E' },
    { name: 'Outros',       percent: 44, color: '#F4C7B1' },
  ];
  const total = 1432.00;
  return { categories, total };
}