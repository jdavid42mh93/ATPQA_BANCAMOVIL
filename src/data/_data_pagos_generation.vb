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
    Set Hoja1 = ThisWorkbook.Sheets("Pagos")
    PathFile = Hoja1.Range("C1").Value
    
    
    Pregunta = MsgBox("Desea generar el archivo?", vbYesNo + vbQuestion)
    If Pregunta = vbNo Then Exit Sub
    
    Dim fnPagos As Object
    Set fnPagos = fs.CreateTextFile(PathFile, True, True) ' Crear el archivo con Unicode (UTF-8) encoding
    
    For i = 4 To 100
        strTipo = Hoja1.Range("A" & i).Value
        strSubTipo = Hoja1.Range("B" & i).Value
        strCuentaDebito = Hoja1.Range("C" & i).Value
        strInstitucionBancaria = Hoja1.Range("G" & i).Value
        strGrupoServicio = Hoja1.Range("D" & i).Value
        strServicio = Hoja1.Range("E" & i).Value
        strNumeroTarjeta = Hoja1.Range("F" & i).Value
        strTipoDocumento = Hoja1.Range("G" & i).Value
        strNumeroIdentificacion = Hoja1.Range("H" & i).Value
        strBeneficiarioAgua = Hoja1.Range("I" & i).Value
        strOpcionPago = Hoja1.Range("J" & i).Value
        strInstitucionFinanciera = Hoja1.Range("P" & i).Value
        
        If (strTipo <> "") Then
              strLinea = "{""case"":""" & i & """, ""status"": ""pending"", ""msg"": """", ""orderStatus"":"""""
              Select Case strTipo
                         
                    Case "Pagos"
                        strLinea = strLinea & ",""type"":""Pagos"""
                         
                        Select Case strSubTipo
                         
                            Case "Servicios Registrados"
                                strSubTipoLine = "Servicios Registrados"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"

                                If (strGrupoServicio <> "") Then
                                    strLinea = strLinea & " ,""grupo_servicios"": """ & strGrupoServicio & """"
                                Else
                                    MsgBox "Campo -Grupo de Servicios- se encuentra vacio."
                                End If
                                
                                If (strServicio <> "") Then
                                    strLinea = strLinea & " ,""servicio"": """ & strServicio & """"
                                Else
                                    MsgBox "Campo -Servicio- se encuentra vacio."
                                End If
                                
                                If (strBeneficiarioAgua <> "") Then
                                    strLinea = strLinea & " ,""beneficiario"": """ & strBeneficiarioAgua & """"
                                Else
                                    MsgBox "Campo -Beneficiario- se encuentra vacio."
                                End If
                                
                                If (strOpcionPago <> "") Then
                                    strLinea = strLinea & " ,""opcion_pago"": """ & strOpcionPago & """"
                                Else
                                    MsgBox "Campo -Opciones de Pago- se encuentra vacio."
                                End If
                            
                            Case "Servicios Eventuales"
                                strSubTipoLine = "Servicios Eventuales"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strGrupoServicio <> "") Then
                                    strLinea = strLinea & " ,""grupo_servicios"": """ & strGrupoServicio & """"
                                Else
                                    MsgBox "Campo -Grupo de Servicios- se encuentra vacio."
                                End If
                                
                                If (strServicio <> "") Then
                                    strLinea = strLinea & " ,""servicio"": """ & strServicio & """"
                                Else
                                    MsgBox "Campo -Servicio- se encuentra vacio."
                                End If
                                
                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                                
                                If (strOpcionPago <> "") Then
                                    strLinea = strLinea & " ,""opcion_pago"": """ & strOpcionPago & """"
                                Else
                                    MsgBox "Campo -Opciones de Pago- se encuentra vacio."
                                End If
                            
                            Case "Mis Tarjetas"
                                strSubTipoLine = "Mis Tarjetas"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                            
                            Case "Tarjetas Registradas"
                                strSubTipoLine = "Tarjetas Registradas"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                            
                            Case "Tarjetas Eventuales"
                                strSubTipoLine = "Tarjetas Eventuales"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If

                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                                
                                If (strTipoDocumento <> "") Then
                                    strLinea = strLinea & " ,""tipo_documento"": """ & strTipoDocumento & """"
                                Else
                                    MsgBox "Campo -Tipo Documento- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strNumeroIdentificacion <> "") Then
                                    strLinea = strLinea & " ,""numero_identificacion"": """ & strNumeroIdentificacion & """"
                                Else
                                    MsgBox "Campo -Numero de Identificacion- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strInstitucionFinanciera <> "") Then
                                    strLinea = strLinea & " ,""institucion_financiera"": """ & strInstitucionFinanciera & """"
                                Else
                                    MsgBox "Campo -Numero de Identificacion- se encuentra vacio."
                                    Exit Sub
                                End If
                  
                        End Select
              End Select
              fnPagos.Write strLinea & "}" & vbCrLf
        End If
    Next
    MsgBox "Se ha creado el archivo en la ruta: " & PathFile
End Sub



