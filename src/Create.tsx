import { ReactNode, useState } from 'react';
import { Task } from './global';

interface CreateProps {
  onSubmit: (data: Task) => void;
}

function Create(props: CreateProps): ReactNode {
  // State form data
  const [formData, setFormData] = useState<Task>({
    isCompleted: false,
    text: ''
  });

  // Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(formData);
    setFormData({
      isCompleted: false,
      text: ''
    })
  };
  
  return (
    <section className='create'>
      <h2>Create task</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="text"
          placeholder="Text"
          required
          value={formData.text}
          onChange={handleChange}
        />
        <input
          type="hidden"
          name="isCompleted"
          checked={formData.isCompleted}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default Create;
