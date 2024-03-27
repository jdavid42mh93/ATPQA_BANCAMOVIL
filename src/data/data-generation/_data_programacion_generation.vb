Private Sub CommandButton1_Click()
    Dim fs As Object
    Dim outFile As Object
    Dim PathFile As String
    Dim Hoja1 As Worksheet
    Dim Tabla As ListObject
    Dim Pregunta As Byte
    Dim strLinea As String
    Dim strSubTipoLine As String
    
    ' Utilizar la función CreateObject para crear una instancia de FileSystemObject
    Set fs = CreateObject("Scripting.FileSystemObject")
    '-------------------------------------------------------
    '  GENERA DATOS PARA INGRESAR ARCHIVO DE PAGOS y TRANSFERENCIAS
    '--------------------------------------------------------
    ' Validar Datos
    Set Hoja1 = ThisWorkbook.Sheets("Programacion")
    PathFile = Hoja1.Range("C1").Value
    
    
    Pregunta = MsgBox("Desea generar el archivo?", vbYesNo + vbQuestion)
    If Pregunta = vbNo Then Exit Sub
    
    Dim fnProgramacion As Object
    Set fnProgramacion = fs.CreateTextFile(PathFile, True, True) ' Crear el archivo con Unicode (UTF-8) encoding
    
    For i = 4 To 100
        strTipo = Hoja1.Range("A" & i).Value
        strSubTipo = Hoja1.Range("B" & i).Value
        strCuentaDebito = Hoja1.Range("C" & i).Value
        strCuentaBeneficiario = Hoja1.Range("D" & i).Value
        strFechaInicio = Hoja1.Range("E" & i).Value
        strFechaFin = Hoja1.Range("F" & i).Value
        strDiaPago = Hoja1.Range("G" & i).Value
        
        If (strTipo <> "") Then
            strLinea = "{""case"":""" & i & """, ""status"": ""pending"", ""msg"": """", ""orderStatus"":"""""
            Select Case strTipo
                    
                    Case "Programacion"
                        strLinea = strLinea & ",""type"":""Programacion"""
                          
                        Select Case strSubTipo
                          
                            Case "Transferencias"
                                strSubTipoLine = "Transferencias"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                            
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                Else
                                    MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strFechaInicio <> "") Then
                                    ' Formatear fecha de inicio
                                    strLinea = strLinea & " ,""fecha_inicio"": """ & Format(strFechaInicio, "m/d/yy") & """"
                                Else
                                    MsgBox "Campo -Fecha Inicio- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strFechaFin <> "") Then
                                    strLinea = strLinea & " ,""fecha_fin"": """ & Format(strFechaFin, "m/d/yy") & """"
                                Else
                                    MsgBox "Campo -Fecha Fin- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strDiaPago <> "") Then
                                    strLinea = strLinea & " ,""dia_pago"": """ & strDiaPago & """"
                                Else
                                    MsgBox "Campo -Dia de Pago- se encuentra vacio."
                                    Exit Sub
                                End If
       
                        End Select
            End Select
            fnProgramacion.Write strLinea & "}" & vbCrLf
        End If
    Next
    MsgBox "Se ha creado el archivo en la ruta: " & PathFile
End Sub
