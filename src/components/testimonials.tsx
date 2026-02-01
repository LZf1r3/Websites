import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Martin',
    title: 'Founder, Northwind Studio',
    quote: 'The motion details were unreal. We saw immediate lift in inbound leads within two weeks.'
  },
  {
    name: 'Theo Nguyen',
    title: 'VP Product, Halo Analytics',
    quote: 'Every interaction feels deliberate. The new site finally matches the ambition of our product.'
  },
  {
    name: 'Bianca Ruiz',
    title: 'Marketing Director, Ember Market',
    quote: 'Our shoppers now spend longer exploring collections. The storytelling UX is top tier.'
  }
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item) => (
        <div key={item.name} className="glass-panel rounded-[28px] p-6 shadow-soft">
          <Quote className="h-8 w-8 text-accent" />
          <p className="mt-4 text-sm text-white/70">“{item.quote}”</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-white/50">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
