import { Oval } from "react-loader-spinner";
import css from './Loader.module.css';


const Loader: React.FC = () => {
    return (
      <div className={css.div}>
        <Oval color="#00BFFF" height={80} width={80} />
        <p>Loading data, please wait...</p>
      </div>
    );
}

export default Loader;