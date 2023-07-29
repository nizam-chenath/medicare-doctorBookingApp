import React , {useState}from 'react'
import faqData from '../json/faqData';
import faqdoctor from "../assets/images/faqdoctor.jpeg"

const Faq = () => {

    const [activeId, setActiveId] = useState(null);

    const handleQuestionClick = (id) => {
      setActiveId(id === activeId ? null : id);
    };
  return (
    <section>
    <div className="faq-section">
        <div className="faq-img">
            <img src={faqdoctor} alt="" />
        </div>
        <div className="faq-question-section">
        <h2>Frequently Asked Questions</h2>
  {faqData.map((faq) => (
    <div key={faq.id} className="faq-item">
      <div
        className={`question ${faq.id === activeId ? "active" : ""}`}
        onClick={() => handleQuestionClick(faq.id)}
      >
        {faq.question}
      </div>
      {faq.id === activeId && <div className="answer">{faq.answer}</div>}
    </div>
  ))}
        </div>
    </div>
</section>
  )
}

export default Faq