import React from 'react';
import { Link } from 'react-router-dom';

const Conclusions = () => {
  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <h3 className="panel-title">Conclusions</h3>
          <p className="panel-text">
            Conclusions discussing the need for increased attention to
            organizational culture withing the field of Orthotics and
            Prosthetics
          </p>
          <p>
            Organizations are often complex and consist of individuals with
            different experiences, skills, and preferences Multiple generation
            in the workforce with differing experiences, education levels and
            backgrounds. Seasoned clinicians vs. residents and newly certified.
            Specialist in pediatrics, scoliosis, diabetics and footwear.
            Organization can be viewed as the coordination of individual
            behaviors and decision making processes To think about how it is
            possible, we first consider how individuals behave Individuals make
            conscious calculation and decisions that would lead to the Optimal
            outcome based on their preferences These preferences are impacted by
            the points above relating to generational attitudes, specialization
            and education To do so, individuals need to have complete knowledge
            about: Those new to clinical practice may not have the experiences
            necessary to have complete knowledge. When an individual starts a
            new job, often supervisors will place strong restrictions on the new
            clinicians decisions and actions until they are certain the outcomes
            coincide with the organizational expectations. This can be
            suffocating to a seasoned clinician as well as a new clinician that
            “thinks they know the outcomes to their actions”. It is imperative
            that the communication around this “trial period” be circular and
            supportive. The situation All potential options and their outcomes
            Their own preference for each outcome We like to think how we make
            decisions but more often what we do is rationalization In Reality
            Individuals are cognitively bounded - Bounded rationality is the
            idea that when individuals make decisions, their rationality is
            limited by the tractability of the decision problem, the cognitive
            limitations of their minds, and the time available to make the
            decision. Decision-makers in this view act as satisficers, seeking a
            satisfactory solution rather than an optimal one. Various stimuli
            demand our attention and mental capacity Often we are under time
            pressure To not go crazy, we in general prefer Habit >Creativity
            Intuition > Calculation or Reasoning Potentially Mistaken Judgement
            > Ambiguity Reference dependent Change> Absolute State Noticeable
            Prototype > Full Data We seek satisfactory/acceptable rather than
            optimal outcomes We simplify and classify the situation with partial
            knowledge We think about a low number of familiar options instead of
            all options When the consequences of the options are not apparent,
            we “hope for the best” Performance programs are used to coordinate
            across individuals and produce consistency Routines that define the
            situation, provide options, and help to select a response Make
            judging and deciding manageable to individuals in a complex
            operation Ensure that the inputs and outputs of individuals are
            compatible with those of other individuals Organizational decoupling
            refers to the gap between actual practices deviate from the formal
            programs What we say versus what we do Reasons: Local optimization
            Cope with multiple demands and conflicting interests Program over
            Organization Individuals are evaluated based on how successful they
            execute the assigned programs Input Problem Individuals could “work
            to rule” even when they foresee negative consequences Output Problem
            Sub-goals are pursued at the expense of organizational goals
            (manager refusing to take Call schedule because he “paid his dues” -
            expense to other employees work life balance) - Directives presented
            by manager in demeaning way causing disengagement. CEO seek to boost
            short-term stock price over long-term success Teachers seek to boost
            test scores over learning (selling more expensive componentry in
            order to raise bottom line for sales)
          </p>
          <p>
            <h2>
              Research Needs in O&P include examination of Culture in Leadership
            </h2>
          </p>
          <ul>
            <li>
              Communication styles: Peer to Peer and with patient population
              considering gender and generational differences
            </li>
            <li>Garner experience from incumbants in the field</li>
            <li>Encourage ideas from younger generation</li>
            <li>
              Increase engagement => encourage growth of field/improved patient
              care
            </li>
          </ul>
          <div>
            <Link to={'/references'}>Next</Link>
          </div>
          <div>
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conclusions;
