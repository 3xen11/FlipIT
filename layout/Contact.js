import { ContactIcon } from '../public/svg';
import SectionHeading from '@/src/components/SectionHeading';

const Contact = () => {
  // console.log(<ContactIcon />);

  return (
    <section className="max-w-screen pt-20">
      <SectionHeading
        heading={'Masz pytania? '}
        headingAccent={'NAPISZ'}
        sign={' do nas!'}
      />
      <div className="max-w-7xl mx-auto h-96  p-5 mb-10 contact-bg flex">
        <div className="w-2/5 relative">
          <ContactIcon className="w-full h-full" />
        </div>
        <div className="w-3/5 ">
          <form className="flex w-full h-full items-center">
            <div className="w-2/5 h-64 flex flex-col px-2">
              <label className="text-white " htmlFor="email">
                E-mail
              </label>
              <input className="p-2 w-full py-2" type="text" id="name" />
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
            <div className="w-3/5 h-64  flex flex-col px-2">
              <label className="text-white " htmlFor="message">
                Wiadomość
              </label>
              <textarea
                className="p-2 resize-none grow w-full"
                name="message"
                id="message"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
