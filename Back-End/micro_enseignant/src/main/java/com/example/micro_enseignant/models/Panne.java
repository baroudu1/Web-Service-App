package com.example.micro_enseignant.models;

import lombok.Data;

@Data
public class Panne {
    private String dateAppartition;
    private String explicationPanne;
    private String frequencePanne;
    private String ordrePanne;
    private String declaredBy;
    private EState etats;

}
