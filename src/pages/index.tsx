import React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import CopyableSpan from '@/components/CopyableSpan'
import Entity from '@/components/Entity'
import HeadTags from '@/components/HeadTags'
import LandscapeOverview from '@/components/LandscapeOverview'
import { Prose } from '@/components/Prose'
import Referer from '@/components/Referer'
import Typography from '@/components/Typography'

function InteractionIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
      />
    </svg>
  )
}

function IdentityIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

function PrivacyIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

export default function Home({}: NextPage<{}>) {
  return (
    <>
      <HeadTags />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            De digitale watersport.
          </h1>
          <p className="mt-1.5 text-xl leading-normal text-gray-500">
            Hoe de watersportsector als geheel kan groeien in omvang en
            beleving, door digitale innovaties beter te faciliteren.
          </p>
          <div className="prose max-w-none text-justify">
            <p>
              Zeilen, roeien, jachtvaren, kite-, wind- en wingsurfen, kanovaren,
              waterskiën… aan breedte geen gebrek in het Nederlandse watersport
              landschap. Een prachtige sector, waarin veel mensen hun passie en
              hun vak hebben gevonden, maar die ook meer gebruik zou moeten
              maken van de mogelijkheden die de digitale wereld haar biedt.
            </p>
            <p>
              Tijd om als sector gemeenschappelijk de{' '}
              <strong>digitale visie</strong> te vernieuwen, versterken en
              versnellen. Waarbij we voor ogen houden dat we de watersport{' '}
              <strong>eenvoudiger, leuker en toegankelijker</strong> willen
              maken voor de sector in de breedste zin van het woord.
            </p>
            <p>
              <i>DigitaleWatersport.nl</i> is een initiatief van Maurits Misana,
              die zelf <Link href={'/verantwoording'}>actief</Link> is in de
              sector. Een ieder is uitgenodigd om op de inhoud van deze site te
              reageren, mail naar{' '}
              <CopyableSpan>reacties@digitalewatersport.nl</CopyableSpan>.
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <div className="-mb-1.5">
          <Typography.Subtitle>De basis</Typography.Subtitle>
          <Typography.Title>Uitgangspunten.</Typography.Title>
        </div>
        <Prose>
          <p>
            Onze sector draait om het opleiden van cursisten. Of dit nou
            consumenten, instructeurs of topsporters zijn. Zij moeten dan ook de
            basis vormen bij het opstellen van uitgangspunten voor een digitaal
            watersportlandschap.
          </p>
        </Prose>
        <dl className="mt-12 space-y-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
          {[
            {
              title:
                'Interactie vindt primair plaats via een opleidingslocatie.',
              description:
                'Cursisten boeken een cursus of training via een opleidingslocatie. De opleidingslocatie is daarmee de centrale plek voor het vinden en ontvangen van informatie.',
              icon: InteractionIcon,
            },
            {
              title: 'Eén identiteit binnen de gehele watersportsector.',
              description:
                'Of het nou gaat om zeilen of kitesurfen, bij een grote zeilschool of lokale vereniging, de cursist heeft één identiteit als het op opleidingen aankomt.',
              icon: IdentityIcon,
            },
            {
              title:
                'Controle over waar, wanneer en welke gegevens gedeeld worden.',
              description:
                'Een opleidingslocatie kan de beste opleiding bieden, als de complete voorgeschiedenis van de cursist bekend is. De cursist is eigenaar in het verlenen en/of intrekken van deze toestemming.',
              icon: PrivacyIcon,
            },
          ].map((uitgangspunt) => {
            return (
              <div key={uitgangspunt.title}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-blue-500 text-white">
                    <uitgangspunt.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 font-medium leading-6 text-gray-900">
                    {uitgangspunt.title}
                  </p>
                </dt>
                <dd className="mt-2 text-justify text-base text-gray-500">
                  {uitgangspunt.description}
                </dd>
              </div>
            )
          })}
        </dl>
      </Container>

      <Container className="mt-12 sm:mt-20">
        <div className="-mb-1.5">
          <Typography.Subtitle>
            Overzicht van partijen en interacties
          </Typography.Subtitle>
          <Typography.Title>Digitale Landschap.</Typography.Title>
        </div>
        <Prose>
          <p>
            Voor we gaan nadenken over apps, websites, interfaces en andere
            vormen van digitale interactie, is het belangrijk om eerst een beeld
            te schetsen van het digitale landschap waarin we ons bevinden. Eerst
            eens een schets, vanuit waar we gaan kijken naar actoren, processen
            en technologie.
          </p>
        </Prose>
        <LandscapeOverview />
        <Prose>
          <h3 className="text-lg sm:text-xl">Onderdelen</h3>
          <h4 className="-mb-4 font-medium">Data Hub</h4>
          <p>
            Centraal staan de gegevens over{' '}
            <Entity type="cursist">cursisten</Entity>,{' '}
            <Entity type="instructeur">instructeurs</Entity>,{' '}
            <Entity type="opleidingslocatie">opleidingslocaties</Entity> en{' '}
            <Entity type="diploma">diploma&apos;s</Entity>, alsmede de relaties
            die hiertussen bestaan. Deze informatie is opgeslagen in een{' '}
            <strong>centrale Data Hub</strong>
            <Referer href="https://towardsdatascience.com/what-is-a-data-hub-41d2ac34c270">
              [1]
            </Referer>
            , waardoor een <strong>single source of truth</strong>
            <Referer href="https://en.wikipedia.org/wiki/Single_source_of_truth">
              [2]
            </Referer>{' '}
            ontstaat.
          </p>
          <p>
            Deze Data Hub vormt de basis voor andere applicaties (een website of
            app bijvoorbeeld) om functionaliteiten om heen te bouwen en gegevens
            uit te wisselen volgens een vast protocol. Om toegang te verkrijgen
            tot de data, zijn <strong>toegangssleutels</strong> nodig. Deze
            worden door de eigenaren van de data uitgedeeld of via de CWO.{' '}
          </p>
          <p>
            De Data Hub biedt op zichzelf{' '}
            <strong>geen gebruikersinterface</strong> waarmee gebruikers met de
            data kunnen interacteren. Dit gebeurt enkel via zogenaamde
            application programming interfaces, ofwel{' '}
            <strong>API&apos;s</strong>.
          </p>

          <h4 className="-mb-4 font-medium">Applicaties</h4>
          <p>
            Applicaties zijn programma&apos;s die <strong>interactie</strong>{' '}
            hebben met de Data Hub. Bijvoorbeeld een website of een app. Deze
            applicaties zijn in staat om gegevens uit te wisselen met de data
            hub, maar kunnen dat ook met elkaar doen als er een gezamenlijke
            interface bestaat.
          </p>
          <p>
            Om deze interactie aan te kunnen gaan, is zoals eerder gezegd een
            toegangssleutel nodig. Deze kan verkregen worden als de beheerder
            van de Data Hub een loper uitgeeft of door de gebruiker om zijn
            sleutel te vragen. Dit laatste zou zich bijvoorbeeld uiten in een{' '}
            <span className="whitespace-nowrap font-medium">
              &apos;Log in met je CWO account&apos;
            </span>
            -knop, waarna de gebruiker toestemming geeft om gegevens te delen.
          </p>

          <h3 className="text-lg sm:text-xl">Actoren</h3>
          <h4 className="-mb-4 font-medium">CWO</h4>
          <p>
            De Stichting Commissie Watersportopleidingen (CWO) is er in
            Nederland om de “ontwikkeling, uitvoering en borging”
            <Referer href="https://cwo.nl/over-cwo/over-de-cwo">
              [3]
            </Referer>{' '}
            van een erkend opleidingssysteem voor alle watersporten te
            verzorgen. Zij zijn verantwoordelijk voor het beheer en de juistheid
            van de gegevens in de Data Hub, alsmede voor het (in opdracht laten)
            bouwen van gebruikersinterfaces voor <Entity type="cursist" />,{' '}
            <Entity type="instructeur" /> en <Entity type="opleidingslocatie" />
            .
          </p>
          <p>
            Enkele voorbeelden van applicaties die onder regie van de CWO staan
            (domeinnamen zijn enkel ter illustratie):
          </p>
          <ul className="-mt-2" role="list">
            <li>
              <span className="font-medium">Watersportdiploma.nl</span>; een
              website waar <Entity type="cursist">cursisten</Entity> al hun
              vorderingen kunnen inzien, voor alle watersporten.
            </li>
            <li>
              <span className="font-medium">CWO.nl</span>; een app waar{' '}
              <Entity type="instructeur">instructeurs</Entity> kennismateriaal
              over de (eisen van) opleidingen vinden.
            </li>
            <li>
              <span className="font-medium">CWO.nl</span>; een website waar
              beheerders van{' '}
              <Entity type="opleidingslocatie">opleidingslocaties</Entity>{' '}
              PVB&apos;s aan- en afmelden en locatiegegevens beheren.
            </li>
          </ul>

          <h4 className="-mb-4 font-medium">Buchung</h4>
          <p>
            Buchung is een marktpartij die technische oplossingen ontwikkeld
            voor partijen in de watersportsector. Een voorbeeld is
            Zeilscholen.APP
            <Referer href="https://www.zeilscholen.app/">[4]</Referer>, dat
            onder meer een boekingsplatform is voor zeilscholen en haar klanten
            (zie ook <Link href="/verantwoording">verantwoording</Link>
            ).
          </p>
          <p>
            Een ergenis voor klanten in dit boekingsproces is dat zij telkens
            opnieuw moeten aangeven wat de laatste behaalde vorderingen zijn.
            Met de opzet van het CWO systeem is het namelijk mogelijk dat een
            cursist elders verder heeft getrained. Een veel betere ervaring voor
            deze klant zou zijn om de zeilschool in dit geval{' '}
            <strong>toestemming</strong> te geven de vorderingen in te zien.
          </p>
          <p>
            Wat dit verder mogelijk maakt, is dat de <strong>identiteit</strong>{' '}
            van de cursist nu gelijk is bij zowel CWO als zeilschool. Boekt een
            klant dus twee jaar achter elkaar, met twee verschillende
            mailadressen, dan blijven beide vorderingen gekoppeld aan één en
            dezelfde persoon in de Data Hub.
          </p>

          <h4 className="-mb-4 font-medium">Andere partijen</h4>
          <p>
            De watersportsector staat bekend om de vele vrijwilligers die actief
            zijn, met vele verschillende achtergronden. Wie weet is er iemand
            die rondloopt bij een lokale vereniging, die een{' '}
            <strong>eigen ledenplatform</strong> opzet op basis van de gegevens
            uit de Data Hub. Of gaat een partij aan de gang om een{' '}
            <strong>online leeromgeving en documentatieplatform</strong> te
            maken, wat ideaal is voor de surfscholen.
          </p>
          <p>
            Zolang deze partijen praten volgens de protocollen die de Data Hub
            begrijpt, en zij vanuit de CWO de juiste rechten hebben, is het
            mogelijk dit soort zaken op te zetten, zonder dat er aan de kant van
            de CWO wijzigingen of investeringen nodig zijn.
          </p>

          <h4 className="-mb-4 font-medium">Stichting Digitale Watersport</h4>
          <p>
            Uitgangspunt is dat alle betrokken partijen, zowel de CWO (als
            beheerder van de data), als de ontwikkelaars van applicaties, gebaat
            zijn bij een kostenefficiënte ontwikkeling en beheer van de Data
            Hub. Verschillende governance vormen zijn mogelijk, waarbij ik
            voorstel om het (technische) beheer van de Data onder te brengen in
            de op te richten <strong>Stichting Digitale Watersport</strong>. De{' '}
            <strong>missie</strong> luidt om een innovatieve, bereikbare,
            veilige en toegankelijke digitale watersportsector mogelijk te
            maken.
          </p>
          <p>
            Binnen de stichting werken de CWO en digitale watersportpartijen
            samen in de besluitvorming omtrent de Data Hub. De stichting is
            verantwoordelijk voor het beheer van de Data Hub, en het onderhouden
            van de protocollen en standaarden. De stichting ontwikkelend
            nadrukkelijk <strong>geen</strong> eigen gebruikersapplicaties, maar
            faciliteert de ontwikkeling van applicaties door derden (de CWO zelf
            en andere partijen). Een bijzondere rol is weggelegd voor de CWO,
            welke verantwoordelijk is voor de <strong>kwaliteit</strong> van de
            gegevens in de Data Hub.
          </p>
          <p>
            Het oprichten van een stichting lijkt in eerste instantie tegen het
            uitgangspunt van &apos;efficiente besluitvorming&apos; in te gaan,
            maar <strong>dat beeld bestrijd ik</strong>. Juist een goede brug
            tussen de CWO enerzijds, en de technische leverancier van de Data
            Hub anderszijds, gaat er voor zorgen dat zaken sneller goed worden
            uitgevoerd.
          </p>
          <p>
            Uiteraard zijn <strong>andere vormen van governance</strong> ook
            mogelijk, maar belangrijk om te waarborgen is dat de ontwikkelaars
            van applicaties belang hebben bij een goede, stabiele en innovatieve
            Data Hub en zij daarom ook een bijdrage (wensten te) leveren
            hieraan.
          </p>
        </Prose>
      </Container>
    </>
  )
}
