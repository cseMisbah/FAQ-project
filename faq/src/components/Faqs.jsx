import React, { useState } from "react";
import { faqsData } from "./Data";
import Faq from "./faq";
import style from "./Faqs.module.css";
const Faqs = () => {
  //console.log(faqsData);
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>Faqs</h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq}></Faq>
        ))}
      </section>
    </main>
  );
};

export default Faqs;
