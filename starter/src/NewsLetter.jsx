import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
};

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our NewsLetter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rems" }}
      >
        submit
      </button>
    </Form>
  );
};

export default NewsLetter;
