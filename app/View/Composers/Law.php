<?php

namespace App\View\Composers;
use Roots\Acorn\View\Composer;

class Law extends Composer
{
    protected static $views = [
        'partials.content-single-law',
    ];

    public function with()
    {
        return [
          'cube' => $this->cube(),
          'content' => get_field('Content'),
          'criteria' => $this->criteria(),
          'footer' => get_field('Law Footer', 'options'),
        ];
    }

    public function criteria() {
      $data = [];

      $criteria = [
        get_field('clear terms'),
        get_field('specific harms'),
        get_field('helpful processes'),
        get_field('not retroactive'),
        get_field('not harmful'),
        get_field('free speech'),
        get_field('simple consents'),
        get_field('international commerce'),
        get_field('fair enforcement'),
        get_field('small enterprises'),
      ];

      foreach(get_field('law criteria', 'options') as $index=>$row) {

        $data[] = [
          'title' => $row['title'],
          'score' => $criteria[$index]['score'],
          'content' => $criteria[$index]['content'],
          'description' => $row['description'],
          'color' => $row['color'],
        ];
      }

      return $data;


    }

    public function cube() {
      $id = get_the_ID();

      $data = [];
      //SCORES
      $scores = [
        get_field('clear terms')['score'],
        get_field('specific harms')['score'],
        get_field('helpful processes')['score'],
        get_field('not retroactive')['score'],
        get_field('not harmful')['score'],
        get_field('free speech')['score'],
        get_field('simple consents')['score'],
        get_field('international commerce')['score'],
        get_field('fair enforcement')['score'],
        get_field('small enterprises')['score'],
      ];

      $data['scores'] = $scores;

      //COLORS
      $colors = [];
      foreach(get_field('law criteria', 'options') as $index=>$row) {
        $colors[] = $row['color'];
      }

      //TOTAL SCORE
      $total = array_sum($scores);

      if($total < 50 ) {
        $scoreColor = '#f15c66';
      }
      elseif($total < 75 ) {
        $scoreColor = '#e4a277';
      }
      else {
        $scoreColor = '#77e593';
      }
      $data['scoreColor'] = $scoreColor;
      $data['totalScore'] = $total;

      //STYLE
      $chartIndex = 0;
      $row = 1;
      $style = '';
      foreach ($scores as $index => $score)
      {
          for ($col = 1; $col <= $score; $col++)
          {
              $style .=
                  ".rcdcLawsChart--index--{$chartIndex} .rcdcLawsChartCube--row--$row.rcdcLawsChartCube--col--" . ($col) . " polygon{\r\n" .
                  "   fill: {$colors[$index]};\r\n" .
                  "}\r\n";
          }
          $row++;
      }

      $data['style'] = $style;
      $data['chartIndex'] = $chartIndex;

      //HELP DISPLAY
      foreach(get_field('law criteria', 'options') as $index=>$row) {
        $data['lawChart']['titles'][] = $row['title'] . ' [Score: ' . $scores[$index] . '/10]';

        $data['lawChart']['descriptionsLines'][] = 
          explode('|||', wordwrap($row['description'], 55, '|||', false));
      }

      return $data;


    }

}

// <script>
//   window.rcdcPhpVars={
//     "lawChart":
//       {"titles":
//         ["Clear Terms [Score: 5\/10]",
//         "Specific Harms [Score: 2\/10]",
//         "Helpful Processes [Score: 5\/10]",
//         "Not Retroactive [Score: 5\/10]",
//         "Not Harmful [Score: 2\/10]",
//         "Free Speech [Score: 3\/10]",
//         "Simple Consents [Score: 3\/10]",
//         "International Commerce [Score: 2\/10]",
//         "Fair Enforcement [Score: 5\/10]",
//         "Small Enterprises [Score: 3\/10]"],
//       "descriptionsLines":[
//         ["Terminology should be clear to avoid confusion,","inconsistency and disputes."],
//         ["Legislation should focus on specific harms and outcomes."],
//         ["Required processes and notices should be clearly defined and","helpful."],
//         ["Legislation should not be retroactive \u2013 new rules should","not apply to previously lawfully collected data."],
//         ["Legislation should not inhibit beneficial data models and","uses."],
//         ["Legislation should not inhibit freedom of expression or","government transparency."],
//         ["Consent standards should be clear for organizations and","promote clarity for consumers."],
//         ["International commerce and cooperation should not be","inhibited."],
//         ["Enforcement provisions should be responsible and","trustworthy; not chilling or anti-competitive."],
//         ["Small organizations should not be prejudiced by impractical","or anti-competitive burdens."]]},
//     };
// </script>