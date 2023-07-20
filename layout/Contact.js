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
      <div className="max-w-7xl mx-auto h-96  p-5 mb-10 bg-white flex">
        <div className="w-2/5 relative">
          <ContactIcon className="w-full h-full" />
        </div>
        <div className="w-3/5  bg-green-500">s</div>
      </div>
    </section>
  );
};
export default Contact;
