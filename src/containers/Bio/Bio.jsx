import React, { Component } from 'react';
import styles from "./Bio.module.scss"

class Bio extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {/* <Link to="../../../public/files/cv.pdf" target="_blank" download>Download</Link> */}
        <h1 className={styles.bioTitle}>Biography</h1>
        <span>

          <p className={styles.slow}>
            An ambitious, driven and self-motivated developer, who is experienced in administration, verbal and written communication techniques, and who values excellent customer and client service and wants to make his career a lifelong process of learning and self-improvement.
          </p>

          {/* <button>Read More</button>

          <p className={styles.intro}> 
            My interest in software development began at university when I realised the potential of being able to develop tailored applications for the collection and interpretation of vast data sets. My introduction to the industry truly commenced amidst an intensive coding boot camp, where I was introduced to an array of languages and libraries. Since that experience, my interest and desire to learn and contribute have increased exponentially, as every new skill has widened my perception of what is possible.
          </p>

          <p className={styles.intro}>
            I have worked as a teacher, vehicle engineer, bakery manager, research geneticist and in administration and management. 
          </p>

          <p className={styles.intro}>
            My experience to date has exemplified the importance of developing and maintaining good working relationships with both colleagues and service users, and I consider good communication to be integral to this and productive teamwork. I believe that good business and customer relations are paramount to providing a distinguished service. I have a positive attitude and I am always willing to learn and develop
          </p> */}
        
        {/* </span>

        <span>

          <h2>Personal Interests</h2>

          <p>

          </p>*/}

        </span> 

      </div>
     );
  }
}
 
export default Bio;