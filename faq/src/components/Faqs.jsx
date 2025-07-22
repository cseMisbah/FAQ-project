import Faq from "./faq";
import React, { useState } from "react";
import style from "./Faqs.module.css";
import { faqsData } from "./Data";

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
