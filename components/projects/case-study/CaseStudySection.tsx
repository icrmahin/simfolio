"use client";

import Image from "next/image";
import type {
  DecisionSection,
  GallerySection,
  ImageSection,
  ListSection,
  MetricsSection,
  ProjectImage,
  ProjectSection,
  QuoteSection,
  SplitSection,
  TextSection,
  VersionSection,
} from "../project-data";

const SIZES = {
  cover: "(max-width: 767px) 100vw, 704px",
  half: "(max-width: 767px) 100vw, 340px",
  third: "(max-width: 767px) 100vw, 224px",
};

function Figure({
  image,
  sizes,
  aspect,
}: {
  image: ProjectImage;
  sizes: string;
  aspect: string;
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-2xl bg-neutral-200 ${aspect}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>

      {image.caption ? (
        <figcaption className="mt-2.5 text-xs leading-relaxed text-neutral-400">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Heading({ title }: { title?: string }) {
  if (!title) return null;

  return (
    <h2 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
      {title}
    </h2>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-2xl space-y-3.5 text-base leading-relaxed text-neutral-600">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function TextBlock({ section }: { section: TextSection }) {
  const paragraphs = section.paragraphs ?? [];
  if (paragraphs.length === 0) return null;

  return (
    <section>
      {section.kicker ? (
        <p className="text-sm font-medium text-neutral-400">{section.kicker}</p>
      ) : null}

      <Heading title={section.title} />

      {paragraphs.length > 0 ? (
        <div className="mt-3">
          <Prose paragraphs={paragraphs} />
        </div>
      ) : null}
    </section>
  );
}

function ImageBlock({ section }: { section: ImageSection }) {
  if (!section.image) return null;

  const { caption, ...image } = section.image;

  return (
    <section>
      <Heading title={section.title} />

      <div className={section.title ? "mt-5" : undefined}>
        <Figure image={image} sizes={SIZES.cover} aspect="aspect-[16/10]" />
      </div>

      {section.title && caption ? (
        <p className="mt-2.5 max-w-2xl text-xs leading-relaxed text-neutral-400">
          {caption}
        </p>
      ) : null}
    </section>
  );
}

function GalleryBlock({ section }: { section: GallerySection }) {
  const images = section.images ?? [];
  if (images.length === 0) return null;

  const columns = section.columns ?? 2;

  return (
    <section>
      <Heading title={section.title} />

      <div
        className={`mt-5 grid gap-4 sm:gap-6 ${
          columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {images.map((image, index) => (
          <Figure
            key={index}
            image={image}
            sizes={columns === 3 ? SIZES.third : SIZES.half}
            aspect="aspect-[4/3]"
          />
        ))}
      </div>
    </section>
  );
}

function SplitBlock({ section }: { section: SplitSection }) {
  const paragraphs = section.paragraphs ?? [];
  if (!section.image && paragraphs.length === 0) return null;

  const media = section.image ? (
    <Figure image={section.image} sizes={SIZES.half} aspect="aspect-[4/3]" />
  ) : null;

  const text = paragraphs.length > 0 ? <Prose paragraphs={paragraphs} /> : null;

  return (
    <section>
      <Heading title={section.title} />

      {media && text ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2 md:items-start md:gap-10">
          {section.side === "right" ? (
            <>
              {text}
              {media}
            </>
          ) : (
            <>
              {media}
              {text}
            </>
          )}
        </div>
      ) : (
        <div className="mt-5 space-y-5">
          {media}
          {text}
        </div>
      )}
    </section>
  );
}

function QuoteBlock({ section }: { section: QuoteSection }) {
  if (!section.text) return null;

  return (
    <section>
      <blockquote className="max-w-2xl border-l border-neutral-300 pl-4 text-lg leading-relaxed text-neutral-800 sm:pl-5 sm:text-xl">
        {section.text}
      </blockquote>

      {section.attribution ? (
        <p className="mt-2.5 pl-4 text-sm text-neutral-400 sm:pl-5">
          {section.attribution}
        </p>
      ) : null}
    </section>
  );
}

function MetricsBlock({ section }: { section: MetricsSection }) {
  const items = section.items ?? [];
  if (items.length === 0) return null;

  return (
    <section>
      <Heading title={section.title} />

      <dl className="mt-5 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-baseline justify-between gap-4 border-b border-neutral-400/40 py-3"
          >
            <dt className="text-sm text-neutral-500">{item.label}</dt>
            <dd className="text-right text-sm text-neutral-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ListBlock({ section }: { section: ListSection }) {
  const items = section.items ?? [];
  if (items.length === 0) return null;

  return (
    <section>
      <Heading title={section.title} />

      <ul className="mt-4 max-w-2xl space-y-2.5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 text-base leading-relaxed text-neutral-600"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DecisionBlock({ section }: { section: DecisionSection }) {
  const decisions = section.decisions ?? [];
  if (decisions.length === 0) return null;

  return (
    <section>
      <Heading title={section.title} />

      <div className="mt-5 max-w-2xl divide-y divide-neutral-200">
        {decisions.map((decision, index) => (
          <div key={index} className="py-4 first:pt-0 last:pb-0">
            <p className="text-base font-medium text-neutral-900">
              {decision.decision}
            </p>

            <dl className="mt-2.5 space-y-2 text-sm leading-relaxed">
              {decision.reason ? (
                <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                  <dt className="text-neutral-400">Reason</dt>
                  <dd className="text-neutral-600">{decision.reason}</dd>
                </div>
              ) : null}

              {decision.tradeOff ? (
                <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                  <dt className="text-neutral-400">Trade-off</dt>
                  <dd className="text-neutral-600">{decision.tradeOff}</dd>
                </div>
              ) : null}

              {decision.result ? (
                <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                  <dt className="text-neutral-400">Result</dt>
                  <dd className="text-neutral-600">{decision.result}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

function VersionBlock({ section }: { section: VersionSection }) {
  const versions = section.versions ?? [];
  if (versions.length === 0) return null;

  return (
    <section>
      <Heading title={section.title} />

      <ol className="mt-5 max-w-2xl">
        {versions.map((version, index) => (
          <li
            key={index}
            className="border-b border-neutral-200 py-5 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-medium text-neutral-900">
                {version.label}
              </span>
              {version.date ? (
                <span className="text-xs text-neutral-400">{version.date}</span>
              ) : null}
            </div>

            {version.title ? (
              <p className="mt-1.5 text-base text-neutral-800">
                {version.title}
              </p>
            ) : null}

            {version.description ? (
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {version.description}
              </p>
            ) : null}

            {version.changes && version.changes.length > 0 ? (
              <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                {version.changes.map((change, changeIndex) => (
                  <div
                    key={changeIndex}
                    className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4"
                  >
                    <dt className="text-neutral-800">{change.what}</dt>
                    <dd className="text-neutral-500">{change.why}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {version.image ? (
              <div className="mt-4">
                <Figure
                  image={version.image}
                  sizes={SIZES.cover}
                  aspect="aspect-[16/10]"
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function CaseStudySection({
  section,
}: {
  section: ProjectSection;
}) {
  switch (section.type) {
    case "text":
      return <TextBlock section={section} />;
    case "image":
      return <ImageBlock section={section} />;
    case "gallery":
      return <GalleryBlock section={section} />;
    case "split":
      return <SplitBlock section={section} />;
    case "quote":
      return <QuoteBlock section={section} />;
    case "metrics":
      return <MetricsBlock section={section} />;
    case "list":
      return <ListBlock section={section} />;
    case "decisions":
      return <DecisionBlock section={section} />;
    case "versions":
      return <VersionBlock section={section} />;
    default:
      return null;
  }
}
