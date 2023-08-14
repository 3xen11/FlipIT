import { ContactIcon } from '../public/svg';
import SectionHeading from '@/src/components/SectionHeading';

const Contact = () => {
  return (
    <section className="max-w-screen pt-20">
      <SectionHeading
        heading={'Masz pytania? '}
        headingAccent={'NAPISZ'}
        sign={' do nas!'}
      />
      <div className="max-w-7xl sm:w-4/5 mx-auto justify-center items-center px-5 py-10 min-h-min mb-10 contact-bg flex flex-col lg:flex-row">
        <div className="w-full md:w-2/5  hidden lg:block">
          <ContactIcon className="w-4/5 mx-auto h-full" />
        </div>
        <div className="w-full">
          <form className="flex w-full flex-col md:flex-row h-full items-center">
            <div className="w-full md:w-2/5 min-h-64 flex flex-col px-2 order-2">
              <label className="text-white mt-8 md:mt-0" htmlFor="email">
                E-mail
              </label>
              <input
                className="p-2 w-full py-2"
                type="text"
                id="name"
                placeholder="Podaj swój email"
              />
              <label className="text-white mt-8" htmlFor="topic">
                Temat
              </label>
              <select className="p-2 w-full py-2" name="topic" id="topic">
                <option value="#">lorem ipsum</option>
                <option value="#">lorem ipsum</option>
                <option value="#">lorem ipsum</option>
                <option value="#">lorem ipsum</option>
              </select>
              <button className="mt-14 tracking-wider text-white mx-auto bg-teal-500 py-2 w-full hover:text-teal-500 hover:bg-white active:scale-95 transition-all">
                Wyślij
              </button>
            </div>
            <div className="w-full md:w-3/5 h-64 flex flex-col px-2 order-1">
              <label className="text-white " htmlFor="message">
                Wiadomość
              </label>
              <textarea
                className="p-2 resize-none grow w-full"
                name="message"
                id="message"
                placeholder="Wpisz treść wiadomości"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
