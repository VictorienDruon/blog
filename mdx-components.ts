import type { MDXComponents } from "mdx/types";

import { Blockquote } from "@/components/Blockquote";
import { Em } from "@/components/Em";
import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { Hr } from "@/components/Hr";
import { Img } from "@/components/Img";
import { InlineCode } from "@/components/InlineCode";
import { Li } from "@/components/Li";
import { Ol } from "@/components/Ol";
import { P } from "@/components/P";
import { Pre } from "@/components/Pre";
import { ProseLink } from "@/components/ProseLink";
import { Strong } from "@/components/Strong";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/Table";
import { Ul } from "@/components/Ul";

export function useMDXComponents(): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    strong: Strong,
    em: Em,
    a: ProseLink,
    code: InlineCode,
    pre: Pre,
    blockquote: Blockquote,
    hr: Hr,
    img: Img,
    table: Table,
    thead: Thead,
    tbody: Tbody,
    tr: Tr,
    th: Th,
    td: Td,
  };
}
