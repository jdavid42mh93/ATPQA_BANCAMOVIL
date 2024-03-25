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
    Set Hoja1 = ThisWorkbook.Sheets("Recargas")
    PathFile = Hoja1.Range("C1").Value
    
    
    Pregunta = MsgBox("Desea generar el archivo?", vbYesNo + vbQuestion)
    If Pregunta = vbNo Then Exit Sub
    
    Dim fnRecargas As Object
    Set fnRecargas = fs.CreateTextFile(PathFile, True, True) ' Crear el archivo con Unicode (UTF-8) encoding
    
    For i = 4 To 100
        strTipo = Hoja1.Range("A" & i).Value
        strGrupoServicio = Hoja1.Range("B" & i).Value
        strServicio = Hoja1.Range("C" & i).Value
        strOpcionPago = Hoja1.Range("D" & i).Value
        strCuentaDebito = Hoja1.Range("E" & i).Value
        strValorRecarga = Hoja1.Range("F" & i).Value
        
        If (strTipo <> "") Then
            strLinea = "{""case"":""" & i & """, ""status"": ""pending"", ""msg"": """", ""orderStatus"":"""""
            Select Case strTipo
                    Case "Recargas"
                        strLinea = strLinea & ",""type"":""Recargas"""

                        Select Case strGrupoServicio
                            Case "RECARGAS"
                                strSubTipoLine = "RECARGAS"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strServicio <> "") Then
                                    strLinea = strLinea & " ,""servicio"": """ & strServicio & """"
                                Else
                                    MsgBox "Campo -Servicio- se encuentra vacio."
                                End If

                                If (strOpcionPago <> "") Then
                                    strLinea = strLinea & " ,""opcion_pago"": """ & strOpcionPago & """"
                                Else
                                    MsgBox "Campo -Opciones de Pago- se encuentra vacio."
                                End If

                                If (strValorRecarga <> "") Then
                                    strLinea = strLinea & " ,""valor_recarga"": """ & strValorRecarga & """"
                                Else
                                    MsgBox "Campo -Valor de Recarga- se encuentra vacio."
                                    Exit Sub
                                End If

                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                        End Select
            End Select
            fnRecargas.Write strLinea & "}" & vbCrLf
        End If
    Next
    MsgBox "Se ha creado el archivo en la ruta: " & PathFile
End Sub
