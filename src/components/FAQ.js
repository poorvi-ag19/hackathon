import React, { useState } from 'react';
import './FAQ.css';
import faqData from './faq.json';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [expandedQuestion, setExpandedQuestion] = useState(null); // To track expanded question

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggle = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id); // Toggle the expanded question
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.category.toLowerCase().includes(selectedCategory.toLowerCase()) &&
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      {/* First row, first cell */}
      <div className="faq-search">
        <h1>Ask Us Anything</h1>
        <input
          type="text"
          placeholder="Search FAQ"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* First row, second cell */}
      <div className="faq-popular">
        <h2>Popular Questions</h2>
        <div className="popular-questions">
          {faqData
            .filter((faq) => faq.category === 'Popular')
            .slice(0, 3)
            .map((faq) => (
              <div className="faq-card" key={faq.id}>
                <div className="question" onClick={() => handleToggle(faq.id)}>
                  <h3>{faq.question}</h3>
                  <span className={`arrow ${expandedQuestion === faq.id ? 'rotate' : ''}`}>▼</span>
                </div>
                {expandedQuestion === faq.id && <p className="answer">{faq.answer}</p>}
              </div>
            ))}
        </div>
      </div>

      {/* Second row, first cell */}
      <div className="faq-categories">
        <h2>Categories</h2>
        <div className="category-menu">
          {['Admissions', 'Curriculum', 'Accreditation & Recognition', 'Career Services', 'Tuition Fee & Scholarships'].map((category) => (
            <div
              key={category}
              className={`category-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Second row, second cell */}
      <div className="faq-category-questions">
        <h2>{selectedCategory} Questions</h2>
        <div className="category-questions">
          {filteredFAQs.slice(0, 3).map((faq) => (
            <div className="faq-card" key={faq.id}>
              <div className="question" onClick={() => handleToggle(faq.id)}>
                <h3>{faq.question}</h3>
                <span className={`arrow ${expandedQuestion === faq.id ? 'rotate' : ''}`}>▼</span>
              </div>
              {expandedQuestion === faq.id && <p className="answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
