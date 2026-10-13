import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Strengths from '@/components/organisms/Strengths';
import Skills from '@/components/organisms/Skills';
import Projects from '@/components/organisms/Projects';
import Experience from '@/components/organisms/Experience';
import Contact from '@/components/organisms/Contact';
import { notFound } from 'next/navigation';
import { dictionaries, hasLocale } from '@/content';

export default async function Home({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];
  const { ids } = t;

  return (
    <>
      <Navbar
        links={t.nav}
        ids={ids}
        ui={t.ui}
        targetIds={dictionaries[t.ui.switchLang.lang].ids}
      />
      <main id={ids.content} tabIndex={-1}>
        <Hero
          id={ids.home}
          t={{ ...t.hero, primaryHref: `#${ids.projects}`, secondaryHref: `#${ids.contact}` }}
        />
        <About id={ids.about} t={t.about} />
        <Strengths id={ids.strengths} t={t.strengths} />
        <Skills id={ids.skills} t={t.skills} />
        <Projects id={ids.projects} t={t.projects} />
        <Experience id={ids.experience} t={t.experience} />
      </main>
      <Contact id={ids.contact} t={t.contact} />
    </>
  );
}
