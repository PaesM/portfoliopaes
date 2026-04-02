export default function Footer() {
  return (
    <div className="footer">
      Contact |{' '}
      <a
        href="https://www.facebook.com/boy.paes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Facebook
      </a>{' '}
      | {' '}
      <a
        href="https://www.instagram.com/vergilsteele/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Instagram
      </a>{' '}
    </div>
  );
}