import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import imgLogo from '@/assets/image/logo_ml@2x.png';
import imgSearch from '@/assets/image/ic_search@2x.png';
import styles from './SearchBar.module.scss';

interface FormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement
}

interface Form extends HTMLFormElement {
  readonly elements: FormElements;
}

const MAIN_CLASS = 'search-bar';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  CONTAINER: styles[`${MAIN_CLASS}__container`],
  SEARCH_BAR: styles[`${MAIN_CLASS}__search-bar`],
};

export default function SearchBar() {
  const router = useRouter();

  const handleFormSubmit = (evt: React.FormEvent<Form>) => {
    evt.preventDefault();
    const queryValue = evt.currentTarget.elements.query.value;

    if (!queryValue.trim()) return;

    router.query.search = queryValue;
    router.push({
      pathname: '/items',
      query: {
        search: queryValue,
      },
    });
  };

  return (
    <header className={CLASSES.MAIN}>
      <div className={CLASSES.CONTAINER}>
        <Link href='/'>
          <Image src={imgLogo} width={53} alt="logo de mercado libre" />
        </Link>
        <div className={CLASSES.SEARCH_BAR}>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="query" placeholder="Nunca dejes de buscar" required />
            <button type="submit">
              <Image src={imgSearch} width={18} alt="buscar" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
