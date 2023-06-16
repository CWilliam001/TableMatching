import React, { useEffect, useState } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'


import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
    searchKey: z.string().min(1).max(10),
})

const Display = () => {
    const [bspStatementRows, setBspStatementRows] = useState<any[]>([]);
    const [refundFormRows, setRefundFormRows] = useState<any[]>([]);
    const [bspMatchingRows, setBspMatchingRows] = useState<any[]>([]);
    const [searchKey, setSearchKey] = useState<string>('');

    const fetchData = () => {
        fetch('disp/', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            const { refund_form, bsp_statement } = data;

            setBspStatementRows(bsp_statement);
            setRefundFormRows(refund_form);
        })
        .catch((err) => {
            console.error('Error while sending request: ', err);
        });
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchKey: ""
        }
    });

    const handleSearchKeyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchKey(val);
    };

    const searchData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const keyword = e.currentTarget.searchKey.value;
        console.log(keyword);
        fetch('disp/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ keyword }),
        })
        .then((res) => res.json())
        .then((data) => {
            const { bsp_matching } = data;
            setBspMatchingRows(bsp_matching);
        }) 
        .catch((err) => {
            console.error('Error while sending request: ', err);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Display</h2>
            {
                bspStatementRows.length > 0 ? (
                    <div>
                        <h2>BSP Statement</h2>
                        <table bgcolor='black' className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>bsp_totalsuppdisc</th>
                                    <th>bsp_gstno</th>
                                    <th>bsp_fareamt</th>
                                    <th>bsp_tax1</th>
                                    <th>bsp_tax2</th>
                                    <th>bsp_tax3</th>
                                    <th>bsp_fac</th>
                                    <th>bsp_pen</th>
                                    <th>bsp_cobl</th>
                                    <th>bsp_stdrate</th>
                                    <th>bsp_stdamt</th>
                                    <th>bsp_discrate</th>
                                    <th>bsp_discamt</th>
                                    <th>bsp_taxoncomm</th>
                                    <th>bsp_balpayable</th>
                                    <th>bsp_agentcode</th>
                                    <th>bsp_billingperiod</th>
                                    <th>bsp_totaltransamt</th>
                                    <th>bsp_totalfareamt</th>
                                    <th>bsp_totaltax</th>
                                    <th>bsp_totalfac</th>
                                    <th>bsp_totalpen</th>
                                    <th>bsp_totalcobl</th>
                                    <th>bsp_totalstdcomm</th>
                                    <th>bsp_durationdate</th>
                                    <th>bsp_totaltaxcomm</th>
                                    <th>bsp_totalbalpayable</th>
                                    <th>bsp_issueddate</th>
                                    <th>bsp_transamt</th>
                                    <th>bsp_category</th>
                                    <th>bsp_raano</th>
                                    <th>bsp_faccode</th>
                                    <th>bsp_cpui</th>
                                    <th>bsp_nrcode</th>
                                    <th>bsp_stat</th>
                                    <th>bsp_fop</th>
                                    <th>bsp_taxcode1</th>
                                    <th>bsp_taxcode2</th>
                                    <th>bsp_taxcode3</th>
                                    <th>bsp_pencode</th>
                                    <th>bsp_airno</th>
                                    <th>bsp_documentno</th>
                                    <th>bsp_trnc1</th>
                                    <th>bsp_trnc2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bspStatementRows.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{obj.bsp_totalsuppdisc}</td>
                                                <td>{obj.bsp_gstno}</td>
                                                <td>{obj.bsp_fareamt}</td>
                                                <td>{obj.bsp_tax1}</td>
                                                <td>{obj.bsp_tax2}</td>
                                                <td>{obj.bsp_tax3}</td>
                                                <td>{obj.bsp_fac}</td>
                                                <td>{obj.bsp_pen}</td>
                                                <td>{obj.bsp_cobl}</td>
                                                <td>{obj.bsp_stdrate}</td>
                                                <td>{obj.bsp_stdamt}</td>
                                                <td>{obj.bsp_discrate}</td>
                                                <td>{obj.bsp_discamt}</td>
                                                <td>{obj.bsp_taxoncomm}</td>
                                                <td>{obj.bsp_balpayable}</td>
                                                <td>{obj.bsp_agentcode}</td>
                                                <td>{obj.bsp_billingperiod}</td>
                                                <td>{obj.bsp_totaltransamt}</td>
                                                <td>{obj.bsp_totalfareamt}</td>
                                                <td>{obj.bsp_totaltax}</td>
                                                <td>{obj.bsp_totalfac}</td>
                                                <td>{obj.bsp_totalpen}</td>
                                                <td>{obj.bsp_totalcobl}</td>
                                                <td>{obj.bsp_totalstdcomm}</td>
                                                <td>{obj.bsp_durationdate}</td>
                                                <td>{obj.bsp_totaltaxcomm}</td>
                                                <td>{obj.bsp_totalbalpayable}</td>
                                                <td>{obj.bsp_issueddate}</td>
                                                <td>{obj.bsp_transamt}</td>
                                                <td>{obj.bsp_category}</td>
                                                <td>{obj.bsp_raano}</td>
                                                <td>{obj.bsp_faccode}</td>
                                                <td>{obj.bsp_cpui}</td>
                                                <td>{obj.bsp_nrcode}</td>
                                                <td>{obj.bsp_stat}</td>
                                                <td>{obj.bsp_fop}</td>
                                                <td>{obj.bsp_taxcode1}</td>
                                                <td>{obj.bsp_taxcode2}</td>
                                                <td>{obj.bsp_taxcode3}</td>
                                                <td>{obj.bsp_pencode}</td>
                                                <td>{obj.bsp_airno}</td>
                                                <td>{obj.bsp_documentno}</td>
                                                <td>{obj.bsp_trnc1}</td>
                                                <td>{obj.bsp_trnc2}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No data to display for BSP Statement</p>
                )
            }
            {
                refundFormRows.length > 0 ? (
                    <div>
                        <h2>Refund Form Table</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>rf_cnothersfee</th>
                                    <th>rf_cntrxn</th>
                                    <th>rf_cnacf</th>
                                    <th>rf_cnaohes</th>
                                    <th>rf_cnmisc</th>
                                    <th>rf_cnreturnmarkup</th>
                                    <th>rf_cntotalrefund</th>
                                    <th>rf_cntaxinvc</th>
                                    <th>rf_cnnetrefund</th>
                                    <th>rf_prepareddate</th>
                                    <th>rf_checkeddate</th>
                                    <th>rf_date</th>
                                    <th>rf_afgross</th>
                                    <th>rf_commission</th>
                                    <th>rf_afnett</th>
                                    <th>rf_tax</th>
                                    <th>rf_gsttax</th>
                                    <th>rf_gstcomm</th>
                                    <th>rf_total</th>
                                    <th>rf_partiallyut</th>
                                    <th>rf_utilisedtax</th>
                                    <th>rf_uitilisedgst</th>
                                    <th>rf_airnoshowfee</th>
                                    <th>rf_aircancellation</th>
                                    <th>rf_airadminfee</th>
                                    <th>rf_adjustamt</th>
                                    <th>rf_totalrefund</th>
                                    <th>rf_markup</th>
                                    <th>rf_invairfare</th>
                                    <th>rf_invmarkup</th>
                                    <th>rf_invtax</th>
                                    <th>rf_invd8tax</th>
                                    <th>rf_invtransfee</th>
                                    <th>rf_invagentfee</th>
                                    <th>rf_invmerchfee</th>
                                    <th>rf_invcaohes</th>
                                    <th>rf_invtotalamt</th>
                                    <th>rf_cnpartiallyut</th>
                                    <th>rf_cnuttax</th>
                                    <th>rf_cnutd8tax</th>
                                    <th>rf_cnnoshowfee</th>
                                    <th>rf_cnaircancellation</th>
                                    <th>rf_cnadminfee</th>
                                    <th>rf_airno</th>
                                    <th>rf_ticketno</th>
                                    <th>rf_type</th>
                                    <th>rf_number</th>
                                    <th>rf_invcno</th>
                                    <th>rf_userid</th>
                                    <th>rf_checkedby</th>
                                    <th>rf_remark</th>
                                    <th>rf_preparedby</th>
                                    <th>rf_custname</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    refundFormRows.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{obj.rf_cnothersfee}</td>
                                                <td>{obj.rf_cntrxn}</td>
                                                <td>{obj.rf_cnacf}</td>
                                                <td>{obj.rf_cnaohes}</td>
                                                <td>{obj.rf_cnmisc}</td>
                                                <td>{obj.rf_cnreturnmarkup}</td>
                                                <td>{obj.rf_cntotalrefund}</td>
                                                <td>{obj.rf_cntaxinvc}</td>
                                                <td>{obj.rf_cnnetrefund}</td>
                                                <td>{obj.rf_prepareddate}</td>
                                                <td>{obj.rf_checkeddate}</td>
                                                <td>{obj.rf_date}</td>
                                                <td>{obj.rf_afgross}</td>
                                                <td>{obj.rf_commission}</td>
                                                <td>{obj.rf_afnett}</td>
                                                <td>{obj.rf_tax}</td>
                                                <td>{obj.rf_gsttax}</td>
                                                <td>{obj.rf_gstcomm}</td>
                                                <td>{obj.rf_total}</td>
                                                <td>{obj.rf_partiallyut}</td>
                                                <td>{obj.rf_utilisedtax}</td>
                                                <td>{obj.rf_uitilisedgst}</td>
                                                <td>{obj.rf_airnoshowfee}</td>
                                                <td>{obj.rf_aircancellation}</td>
                                                <td>{obj.rf_airadminfee}</td>
                                                <td>{obj.rf_adjustamt}</td>
                                                <td>{obj.rf_totalrefund}</td>
                                                <td>{obj.rf_markup}</td>
                                                <td>{obj.rf_invairfare}</td>
                                                <td>{obj.rf_invmarkup}</td>
                                                <td>{obj.rf_invtax}</td>
                                                <td>{obj.rf_invd8tax}</td>
                                                <td>{obj.rf_invtransfee}</td>
                                                <td>{obj.rf_invagentfee}</td>
                                                <td>{obj.rf_invmerchfee}</td>
                                                <td>{obj.rf_invcaohes}</td>
                                                <td>{obj.rf_invtotalamt}</td>
                                                <td>{obj.rf_cnpartiallyut}</td>
                                                <td>{obj.rf_cnuttax}</td>
                                                <td>{obj.rf_cnutd8tax}</td>
                                                <td>{obj.rf_cnnoshowfee}</td>
                                                <td>{obj.rf_cnaircancellation}</td>
                                                <td>{obj.rf_cnadminfee}</td>
                                                <td>{obj.rf_airno}</td>
                                                <td>{obj.rf_ticketno}</td>
                                                <td>{obj.rf_type}</td>
                                                <td>{obj.rf_number}</td>
                                                <td>{obj.rf_invcno}</td>
                                                <td>{obj.rf_userid}</td>
                                                <td>{obj.rf_checkedby}</td>
                                                <td>{obj.rf_remark}</td>
                                                <td>{obj.rf_preparedby}</td>
                                                <td>{obj.rf_custname}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    
                ) : (
                    <p>No data to display for Refund Forms</p>
                )
            }
            {
                bspStatementRows.length > 0 && refundFormRows.length > 0 ? (
                    <div className='flex items-center space-x-2'>
                        <Form {...form}>
                            <form onSubmit={searchData} className='space-y-8'>
                                <FormField
                                    control={form.control}
                                    name='searchKey'
                                    render={({ field }) => {
                                        return <FormItem>
                                                    <FormLabel>Search Keyword: </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} value={searchKey} onChange={handleSearchKeyInputChange} />
                                                    </FormControl>
                                                </FormItem>
                                    }}
                                />
                                <Button type="submit">Match</Button>
                            </form>
                        </Form>
                    </div>
                ) : null
            }
            {
                bspStatementRows.length > 0 && refundFormRows.length > 0 && bspMatchingRows.length > 0 ? (
                    <div>
                        <h2>BSP Matching</h2>
                        <table bgcolor='black' className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th>bsp_totalsuppdisc</th>
                                    <th>bsp_gstno</th>
                                    <th>bsp_fareamt</th>
                                    <th>bsp_tax1</th>
                                    <th>bsp_tax2</th>
                                    <th>bsp_tax3</th>
                                    <th>bsp_fac</th>
                                    <th>bsp_pen</th>
                                    <th>bsp_cobl</th>
                                    <th>bsp_stdrate</th>
                                    <th>bsp_stdamt</th>
                                    <th>bsp_discrate</th>
                                    <th>bsp_discamt</th>
                                    <th>bsp_taxoncomm</th>
                                    <th>bsp_balpayable</th>
                                    <th>bsp_agentcode</th>
                                    <th>bsp_billingperiod</th>
                                    <th>bsp_totaltransamt</th>
                                    <th>bsp_totalfareamt</th>
                                    <th>bsp_totaltax</th>
                                    <th>bsp_totalfac</th>
                                    <th>bsp_totalpen</th>
                                    <th>bsp_totalcobl</th>
                                    <th>bsp_totalstdcomm</th>
                                    <th>bsp_durationdate</th>
                                    <th>bsp_totaltaxcomm</th>
                                    <th>bsp_totalbalpayable</th>
                                    <th>bsp_issueddate</th>
                                    <th>bsp_transamt</th>
                                    <th>bsp_category</th>
                                    <th>bsp_raano</th>
                                    <th>bsp_faccode</th>
                                    <th>bsp_cpui</th>
                                    <th>bsp_nrcode</th>
                                    <th>bsp_stat</th>
                                    <th>bsp_fop</th>
                                    <th>bsp_taxcode1</th>
                                    <th>bsp_taxcode2</th>
                                    <th>bsp_taxcode3</th>
                                    <th>bsp_pencode</th>
                                    <th>bsp_airno</th>
                                    <th>bsp_documentno</th>
                                    <th>bsp_trnc1</th>
                                    <th>bsp_trnc2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bspMatchingRows.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{obj.bsp_totalsuppdisc}</td>
                                                <td>{obj.bsp_gstno}</td>
                                                <td>{obj.bsp_fareamt}</td>
                                                <td>{obj.bsp_tax1}</td>
                                                <td>{obj.bsp_tax2}</td>
                                                <td>{obj.bsp_tax3}</td>
                                                <td>{obj.bsp_fac}</td>
                                                <td>{obj.bsp_pen}</td>
                                                <td>{obj.bsp_cobl}</td>
                                                <td>{obj.bsp_stdrate}</td>
                                                <td>{obj.bsp_stdamt}</td>
                                                <td>{obj.bsp_discrate}</td>
                                                <td>{obj.bsp_discamt}</td>
                                                <td>{obj.bsp_taxoncomm}</td>
                                                <td>{obj.bsp_balpayable}</td>
                                                <td>{obj.bsp_agentcode}</td>
                                                <td>{obj.bsp_billingperiod}</td>
                                                <td>{obj.bsp_totaltransamt}</td>
                                                <td>{obj.bsp_totalfareamt}</td>
                                                <td>{obj.bsp_totaltax}</td>
                                                <td>{obj.bsp_totalfac}</td>
                                                <td>{obj.bsp_totalpen}</td>
                                                <td>{obj.bsp_totalcobl}</td>
                                                <td>{obj.bsp_totalstdcomm}</td>
                                                <td>{obj.bsp_durationdate}</td>
                                                <td>{obj.bsp_totaltaxcomm}</td>
                                                <td>{obj.bsp_totalbalpayable}</td>
                                                <td>{obj.bsp_issueddate}</td>
                                                <td>{obj.bsp_transamt}</td>
                                                <td>{obj.bsp_category}</td>
                                                <td>{obj.bsp_raano}</td>
                                                <td>{obj.bsp_faccode}</td>
                                                <td>{obj.bsp_cpui}</td>
                                                <td>{obj.bsp_nrcode}</td>
                                                <td>{obj.bsp_stat}</td>
                                                <td>{obj.bsp_fop}</td>
                                                <td>{obj.bsp_taxcode1}</td>
                                                <td>{obj.bsp_taxcode2}</td>
                                                <td>{obj.bsp_taxcode3}</td>
                                                <td>{obj.bsp_pencode}</td>
                                                <td>{obj.bsp_airno}</td>
                                                <td>{obj.bsp_documentno}</td>
                                                <td>{obj.bsp_trnc1}</td>
                                                <td>{obj.bsp_trnc2}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    ) : (
                    <p>No data to display for BSP Matching</p>
                )
            }
        </div>
    )
}

export default Display