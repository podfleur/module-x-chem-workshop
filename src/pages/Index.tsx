import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Index = () => {
  const [selectedSolution1, setSelectedSolution1] = useState<string | null>(
    null
  );
  const [selectedSolution2, setSelectedSolution2] = useState<string | null>(
    null
  );
  const [mixingResult, setMixingResult] = useState<{
    result: string;
    equation: string;
    interpretation: string;
    color: string;
  } | null>(null);
  const [isMixing, setIsMixing] = useState(false);

  const solutions = [
    {
      id: "A",
      name: "Solution A",
      color: "hsl(var(--solution-a))",
      description: "HCl",
    },
    {
      id: "B",
      name: "Solution B",
      color: "hsl(var(--solution-b))",
      description: "NaOH",
    },
    {
      id: "C",
      name: "Solution C",
      color: "hsl(var(--solution-c))",
      description: "CuSO₄",
    },
    {
      id: "D",
      name: "Solution D",
      color: "hsl(var(--solution-d))",
      description: "NaCl",
    },
    {
      id: "E",
      name: "Solution E",
      color: "hsl(var(--solution-e))",
      description: "AgNO₃",
    },
  ];

  const handleSolutionClick = (solutionId: string) => {
    if (!selectedSolution1) {
      setSelectedSolution1(solutionId);
    } else if (!selectedSolution2 && solutionId !== selectedSolution1) {
      setSelectedSolution2(solutionId);
    } else if (solutionId === selectedSolution1) {
      setSelectedSolution1(null);
    }
  };

  const handleMix = () => {
    if (!selectedSolution1 || !selectedSolution2) return;

    setIsMixing(true);

    setTimeout(() => {
      const mixture = [selectedSolution1, selectedSolution2].sort().join(" + ");
      let result = {
        result: "",
        equation: "",
        interpretation: "",
        color: "",
      };

      if (mixture === "A + B") {
        result = {
          result: "Aucune précipitation",
          equation: "NaOH + HCl → NaCl + H₂O",
          interpretation: "Réaction acide-base complète",
          color: "hsl(var(--result-transparent))",
        };
      } else if (mixture === "A + C") {
        result = {
          result: "Solution incolore",
          equation: "CuSO₄ + 2HCl → aucune réaction visible",
          interpretation: "Milieu acide, ions cuivre restants en solution",
          color: "hsl(var(--result-transparent))",
        };
      } else if (mixture === "B + C") {
        result = {
          result: "Précipité bleu",
          equation: "CuSO₄ + 2NaOH → Cu(OH)₂ ↓ + Na₂SO₄",
          interpretation: "Complexe de cuivre formé : réaction réussie",
          color: "hsl(var(--result-blue))",
        };
      } else if (mixture === "A + D") {
        result = {
          result: "Solution incolore",
          equation: "NaCl + HCl → aucune réaction visible",
          interpretation: "Mélange neutre de sels et d’acide",
          color: "hsl(var(--result-transparent))",
        };
      } else if (mixture === "B + D") {
        result = {
          result: "Précipité blanc",
          equation: "NaCl + 2NaOH → Na₂SO₄ + 2H₂O",
          interpretation: "Formation d'un complexe de sodium",
          color: "hsl(var(--result-white))",
        };
      } else if (mixture === "C + D") {
        result = {
          result: "Solution incolore",
          equation: "CuSO₄ + NaCl → aucune réaction visible",
          interpretation: "Les deux sels restent dissous",
          color: "hsl(var(--result-transparent))",
        };
      } else if (mixture === "A + E") {
        result = {
          result: "Précipité blanc",
          equation: "AgNO₃ + HCl → AgCl ↓ + HNO₃",
          interpretation: "Formation d'un précipité de chlorure d'argent",
          color: "hsl(var(--result-white))",
        };
      } else if (mixture === "B + E") {
        result = {
          result: "Solution incolore",
          equation: "AgNO₃ + NaOH → aucune réaction visible",
          interpretation: "Ions argent restent en solution",
          color: "hsl(var(--result-transparent))",
        };
      } else if (mixture === "C + E") {
        result = {
          result: "Précipité brun",
          equation: "AgNO₃ + CuSO₄ → Ag + Cu(NO₃)₂",
          interpretation: "Réduction de l'argent métallique",
          color: "hsl(var(--result-brown))",
        };
      } else if (mixture === "D + E") {
        result = {
          result: "Solution rougeâtre",
          equation:
            "AgNO₃ + NaCl → aucune réaction visible mais on trouvait ça plus joli en rouge",
          interpretation: "Les deux sels restent dissous",
          color: "hsl(var(--result-red))",
        };
      }

      setMixingResult(result);
      setIsMixing(false);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedSolution1(null);
    setSelectedSolution2(null);
    setMixingResult(null);
    setIsMixing(false);
  };

  const morseData = [
    // Lettres
    { char: "A", morse: ".-" },
    { char: "B", morse: "-..." },
    { char: "C", morse: "-.-." },
    { char: "D", morse: "-.." },
    { char: "E", morse: "." },
    { char: "F", morse: "..-." },
    { char: "G", morse: "--." },
    { char: "H", morse: "...." },
    { char: "I", morse: ".." },
    { char: "J", morse: ".---" },
    { char: "K", morse: "-.-" },
    { char: "L", morse: ".-.." },
    { char: "M", morse: "--" },
    { char: "N", morse: "-." },
    { char: "O", morse: "---" },
    { char: "P", morse: ".--." },
    { char: "Q", morse: "--.-" },
    { char: "R", morse: ".-." },
    { char: "S", morse: "..." },
    { char: "T", morse: "-" },
    { char: "U", morse: "..-" },
    { char: "V", morse: "...-" },
    { char: "W", morse: ".--" },
    { char: "X", morse: "-..-" },
    { char: "Y", morse: "-.--" },
    { char: "Z", morse: "--.." },

    { char: "0", morse: "-----" },
    { char: "1", morse: ".----" },
    { char: "2", morse: "..---" },
    { char: "3", morse: "...--" },
    { char: "4", morse: "....-" },
    { char: "5", morse: "....." },
    { char: "6", morse: "-...." },
    { char: "7", morse: "--..." },
    { char: "8", morse: "---.." },
    { char: "9", morse: "----." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
        <header className="text-center space-y-4 py-8">
          <div className="inline-block">
            <Badge
              variant="outline"
              className="text-lg px-6 py-2 border-primary/50 bg-primary/10 text-primary font-mono"
            >
              LABORATOIRE EPSI
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Notes concernant le technicien R. Brohan - module simon-protocol
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-muted-foreground font-mono text-sm">
            <p>Objet : Evaluation psycho-physiologique du sujet</p>
            <span className="hidden md:inline">•</span>
            <p>Date : 06/10/2025</p>
            <span className="hidden md:inline">•</span>
            <p>Chercheur : Dr. S. Lonefy</p>
          </div>
        </header>

        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Synthèse</h2>
              <br />
              <p className="text text-justify">
                Après plusieurs séances d’observation et d’entretiens cliniques
                simulés, le sujet R. Brohan présente une singularité de la
                perception chromatique décrite comme une permutation stable et
                non standardisée des teintes primaires. Les tests informels
                montrent une correspondance interne des couleurs qui diffère
                systématiquement des conventions visuelles habituelles. Le
                phénomène est constant dans un large éventail de conditions
                d’éclairage et s’accompagne d’une adaptation cognitive
                partielle, ce qui rend le sujet fonctionnel mais vulnérable aux
                ambiguïtés colorées dans les tâches rapides.
              </p>
              <br />
              <p className="text text-justify">
                Observations complémentaires : Réponses verbales rapides parfois
                retardées lorsqu’on lui demande d’identifier des couleurs.
                Comportement calme; aucune détresse apparente liée à la
                perception colorée.
              </p>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">IMPORTANT</h2>
              <p className="text-muted-foreground">
                Indice : pensez à l'ordre alphabétique de la première lettre de
                chaque couleur
              </p>
              <br />
              <p>
                R. Brohan s'est trompé dans le cablâge des boutons, il voit la
                couleur 18 là où les autres voient la couleur 2.
              </p>
              <p>Il voit 2 là où les autres voient 10.</p>
              <p>Il voit 10 là où les autres voient 22.</p>
              <p>Il voit 22 là où les autres voient 18.</p>
            </div>
            <p className="text font-bold">
              Consignes : Appuyez une fois sur n'importe quel bouton du moddule
              pour commencer.
            </p>
          </div>
        </Card>

        <header className="text-center space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Pages provenant d'un dossier d'archive - module EPS-morse
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-muted-foreground font-mono text-sm">
            <p>Objet : Guides de traduction de messages codés</p>
            <span className="hidden md:inline">•</span>
            <p>Date : 07/10/2025</p>
            <span className="hidden md:inline">•</span>
            <p>Chercheur : Dr. A. Ralby</p>
          </div>
        </header>

        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6 text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Message envoyé par le docteur Alman Ralby
            </h2>
            <br />
            <div className="inline-block">
              <p className="text text-justify">Cher agent,</p>
              <br />
              <p className="text text-justify">
                Décodez le message reçu, puis entrez la séquence correspondante
                à l’aide du bouton prévu sur le module.
              </p>
              <p className="text text-justify">
                L’accès au protocole de stabilisation nécessite la transmission
                d’un code en Morse.
              </p>
              <br />
              <p className="text text-justify"> Décodez le message reçu, puis entrez la séquence correspondante à l’aide du bouton prévu sur le module.</p>
              <p className="text text-justify">La précision est essentielle : une erreur pourrait compromettre l’intégrité de l’antidote.</p>
            <br />
              <p className="text text-justify font-bold "> - Département de Sécurité Biologique, OMS</p>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6 text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Code Morse International
            </h2>
            <div className="max-w-xl mx-auto p-4 rounded-2xl shadow ">
              <table className="w-full border-collapse text-center bg-transparent text-white">
                <thead>
                  <tr className="bg-transparent">
                    <th className="border border-white px-2 py-1">Caractère</th>
                    <th className="border border-white px-2 py-1">
                      Code Morse
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {morseData.map((item) => (
                    <tr key={item.char}>
                      <td className="border border-white px-2 py-1 font-bold">
                        {item.char}
                      </td>
                      <td className="border border-white px-2 py-1 font-mono">
                        {item.morse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
          </div>
        </Card>

        <header className="text-center space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Fiche de résultats expérimentaux - module X-Chem
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-muted-foreground font-mono text-sm">
            <p>Objet : Étude de la formation d'un précipité caractéristique</p>
            <span className="hidden md:inline">•</span>
            <p>Date : 08/10/2025</p>
            <span className="hidden md:inline">•</span>
            <p>Chercheur : Dr. Y. Gueriac</p>
          </div>
        </header>

        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Résolvez les équations
              </h2>
              <p className="text-muted-foreground">
                N'hésitez pas à utiliser du papier et un crayon !
              </p>
              <br />
              <p className="text">Solution ? : 2 + 4( x + 3 ) = 2 </p>
              <p className="text">Solution ?? : 4x - 7 - 3( x + 1 ) = 5 </p>
            </div>
            <p className="text font-bold">
              Sélectionnez les deux résultats corrects parmi les propositions
              suivantes :
            </p>
            <div className="grid grid-cols-5 gap-4 md:gap-6">
              <p>Résultat A = 9</p>
              <p>Résultat B = 15</p>
              <p>Résultat C = -3</p>
              <p>Résultat D = 2</p>
              <p>Résultat E = 3</p>
            </div>
          </div>
        </Card>

        {/* Interactive Experiment Section */}
        <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg">
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Effectuez vos propres mélanges
              </h2>
              <p className="text-muted-foreground">
                Sélectionnez deux solutions pour observer la réaction et
                déterminer la couleur du câble à débrancher.
              </p>
            </div>

            {/* Solutions */}
            <div className="grid grid-cols-5 gap-4 md:gap-6">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => handleSolutionClick(solution.id)}
                  disabled={isMixing || mixingResult !== null}
                  className={`relative group transition-all duration-300 ${
                    selectedSolution1 === solution.id ||
                    selectedSolution2 === solution.id
                      ? "scale-105"
                      : "hover:scale-105"
                  } ${
                    isMixing || mixingResult
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="relative">
                    {/* Beaker */}
                    <div className="w-full aspect-[3/4] bg-card/80 border-2 border-border rounded-b-3xl relative overflow-hidden">
                      {/* Solution liquid */}
                      <div
                        className={`absolute bottom-0 w-full h-3/4 transition-all duration-300 ${
                          selectedSolution1 === solution.id ||
                          selectedSolution2 === solution.id
                            ? "animate-bubble"
                            : ""
                        }`}
                        style={{ backgroundColor: solution.color }}
                      >
                        {/* Bubbles effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div>
                      </div>

                      {/* Selection indicator */}
                      {(selectedSolution1 === solution.id ||
                        selectedSolution2 === solution.id) && (
                        <div className="absolute inset-0 border-4 border-primary rounded-b-3xl animate-pulse"></div>
                      )}
                    </div>

                    {/* Label */}
                    <div className="mt-3 text-center">
                      <p className="font-bold text-foreground text-lg">
                        {solution.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mix Button */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleMix}
                disabled={
                  !selectedSolution1 ||
                  !selectedSolution2 ||
                  isMixing ||
                  mixingResult !== null
                }
                className="px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isMixing ? "Mélange en cours..." : "Mélanger"}
              </Button>
              {(selectedSolution1 || selectedSolution2 || mixingResult) && (
                <Button
                  onClick={handleReset}
                  disabled={isMixing}
                  variant="outline"
                  className="px-8 py-6 text-lg font-bold"
                >
                  Réinitialiser
                </Button>
              )}
            </div>

            {/* Result Display */}
            {mixingResult && (
              <div className="animate-mix">
                <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Résultat observé
                      </h3>

                      {/* Result beaker */}
                      <div className="flex justify-center mb-4">
                        <div className="w-48 aspect-[3/4] bg-card/80 border-2 border-primary rounded-b-3xl relative overflow-hidden">
                          <div
                            className="absolute bottom-0 w-full h-3/4 animate-pour"
                            style={{ backgroundColor: mixingResult.color }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div>
                            {mixingResult.result === "Précipité bleu" && (
                              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-primary to-transparent animate-bubble"></div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`inline-block px-6 py-3 rounded-full text-lg font-bold mb-4 ${
                          mixingResult.result === "Précipité bleu"
                            ? "bg-primary/20 text-primary border-2 border-primary shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                            : "bg-muted/50 text-muted-foreground border-2 border-border"
                        }`}
                      >
                        {mixingResult.result}
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <p className="text-sm font-mono text-muted-foreground">
                        <span className="font-bold text-foreground">
                          Équation :{" "}
                        </span>
                        {mixingResult.equation}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">
                          Interprétation :{" "}
                        </span>
                        {mixingResult.interpretation}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm font-mono py-4">
          <p>Document confidentiel • Laboratoire EPSI • 2025</p>
        </footer>
      </div>
    </div>
  );
};
