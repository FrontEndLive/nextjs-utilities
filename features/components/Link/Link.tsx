import NextLink from 'next/link';

type Props = JSX.IntrinsicElements['a'] & { href: string };
const Link = (props: Props) => {
  const { href, children } = props;

  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
};
export default Link;
