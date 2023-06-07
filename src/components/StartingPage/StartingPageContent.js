import classes from './StartingPageContent.module.css';
import Typed from 'react-typed';


const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h2>Welcome on Board!</h2>
      <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
    </section>
  );
};

export default StartingPageContent;
