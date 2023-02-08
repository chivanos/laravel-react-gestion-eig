<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PDF;


class EmploiContoller extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Emplois du temps',
            'date' => date('m/d/Y')
        ];
           
        $pdf = PDF::loadView('tmplink', $data);
     
        return $pdf->download('Liste_de_presence.pdf');
    }

    public function pdf()
    {
        $donnee = [
            'title' => 'Emplois du temps',
            'contenue' => '
            <div class="table-responsive">
                <table class="table align-middle">
                    <thead>
                    <tr>
                        Lorem
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        Lorem
                    </tr>
                    <tr class="align-bottom">
                        Lorem
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td class="align-top">This cell is aligned to the top.</td>
                        <td>Lorem</td>
                    </tr>
                    </tbody>
                </table>
            </div> ',
            'date' => date('m/d/Y')
        ];
           
        $pdf = PDF::loadView('emploi', $donnee);
     
        return $pdf->download('Liste.pdf');
    }
}
