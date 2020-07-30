import { H1, H3, P, Stack, Link } from 'newskit';
import Template from '../components/template';
import { pageTitle as page1Title } from './page1';
import { pageTitle as page2Title } from './page2';
import { pageTitle as page3Title } from './page3';
import { pageTitle as page4Title } from './page4';
import { pageTitle as page5Title } from './page5';
import { pageTitle as page6Title } from './page6';
import { pageTitle as page7Title } from './page7';
import { pageTitle as page8Title } from './page8';

export default () => (
  <Template>
    <H1>NewsKit Demo</H1>
    <hr />
    <H3 as="div">
      <Stack space="sizing030">
        <Link href="/page1">{page1Title}</Link>
        <Link href="/page2">{page2Title}</Link>
        <Link href="/page3">{page3Title}</Link>
        <Link href="/page4">{page4Title}</Link>
        <Link href="/page5">{page5Title}</Link>
        <Link href="/page6">{page6Title}</Link>
        <Link href="/page7">{page7Title}</Link>
        <Link href="/page8">{page8Title}</Link>
      </Stack>
    </H3>
    <hr />
    <footer>
      <P>
        <Link href="https://newskit.co.uk/">newskit.co.uk</Link>
        {` | `}
        <Link href="https://github.com/newscorp-ghfb/ncu-newskit">
          NewsKit on GitHub
        </Link>
        {` | `}
        <Link href="https://github.com/lhaggar/newskit-demo">
          This Demo on GitHub
        </Link>
      </P>
    </footer>
  </Template>
);
